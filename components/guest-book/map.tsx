import Map, { Layer, Source } from 'react-map-gl';
import type { MapRef, GeoJSONSource, LayerProps } from 'react-map-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import type mapboxgl from 'mapbox-gl';
import styles from "./map.module.css";
import { useMapData } from '../../data/map-data';
import { useCookies } from 'react-cookie';

const clusterLayer: LayerProps = {
	id: 'clusters',
	type: 'circle',
	source: 'users',
	filter: ['has', 'point_count'],
	paint: {
		'circle-color': ['step', ['get', 'point_count'], '#0693e3', 100, '#0693e3', 750, '#0693e3'],
		'circle-radius': ['step', ['get', 'point_count'], 30, 10, 30, 50, 40],
		'circle-stroke-width': 1,
		'circle-stroke-color': '#fff'
	}
};

const clusterCountLayer: LayerProps = {
	id: 'cluster-count',
	type: 'symbol',
	source: 'users',
	filter: ['has', 'point_count'],
	layout: {
		'text-field': '{point_count_abbreviated}',
		'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
		'text-size': 18
	}
};

const unclusteredPointLayer: LayerProps = {
	id: 'unclustered-point',
	type: 'circle',
	source: 'users',
	filter: ['!', ['has', 'point_count']],
	paint: {
		'circle-color': '#0693e3',
		'circle-radius': 10,
		'circle-stroke-width': 1,
		'circle-stroke-color': '#fff'
	}
};

export function GuestBookMap() {
	const pins = useMapData();
	const mapRef = useRef<MapRef>(null);
	const [cookies] = useCookies();
	const homeLongitude = Number(cookies['lng'] ?? "-98");
	console.log(homeLongitude);

	const onClick = (event: mapboxgl.MapLayerMouseEvent) => {


		// @ts-expect-error - Ignore type errors from MapBox...
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		const feature = event.features[0] as { properties: { cluster_id: number }, geometry: { coordinates: mapboxgl.LngLatLike } } | undefined;

		if (!feature) {
			console.log("CLICKED", event);
			return;
		}

		const clusterId = feature.properties.cluster_id
		const mapboxSource = mapRef.current?.getSource('users') as GeoJSONSource;

		mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
			if (err) {
				return;
			}

			mapRef.current?.easeTo({
				center: feature.geometry.coordinates,
				zoom,
				duration: 500
			});
		});
	};

	const setNewPosition = useCallback((props: { lng: number, zoom: number }) => {
		mapRef.current?.easeTo({
			center: {
				lat: 30,
				lng: props.lng,
			},
			zoom: props.zoom,
			duration: 0
		});
	}, []);

	useEffect(() => {
		const onScroll = () => {
			const scrollPosition = document.documentElement.scrollTop;
			const height = window.innerHeight - 72;
			const factor = Math.min(Math.max((scrollPosition / height), 0), 2) / 2;
			const MAX_ZOOM = 720;
			const lng = (factor * MAX_ZOOM) - 360 + homeLongitude;
			setNewPosition({ lng, zoom: Math.max(Math.min((factor * 5), 5), 0) });
		};
		document.addEventListener("scroll", onScroll);
		return () => {
			document.removeEventListener("scroll", onScroll)
		}
	}, [setNewPosition, homeLongitude]);

	return (
		<div className={styles.mapContainer}>
			<Map
				initialViewState={{
					longitude: homeLongitude,
					pitch: 0,
					zoom: 2
				}}
				interactiveLayerIds={[clusterLayer.id ?? ""]}
				// longitude={lng}
				mapStyle='mapbox://styles/elijahcobb/cl630138t001n14o6mcmhdxbc'
				mapboxAccessToken='pk.eyJ1IjoiZWxpamFoY29iYiIsImEiOiJjajkzYThmbTgwdGVtMnFtd2FwanR0OG1pIn0.Rz-BZmtYh57w2KRbEc7JpQ'
				onClick={onClick}
				projection='globe'
				ref={mapRef}
				scrollZoom={false}
			>
				<Source
					cluster
					clusterMaxZoom={14}
					clusterRadius={50}
					data={{
						type: "FeatureCollection",
						features: pins.map(pin => ({
							type: "Feature",
							properties: {},
							geometry: {
								type: "Point",
								coordinates: [
									pin.lng,
									pin.lat,
									0.0
								]
							}
						}))
					}}
					id="users"
					type="geojson"
				>
					<Layer {...clusterLayer} />
					<Layer {...clusterCountLayer} />
					<Layer {...unclusteredPointLayer} />
				</Source>
			</Map>
		</div >
	);
}