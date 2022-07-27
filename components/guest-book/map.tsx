import Map, { Layer, Source } from 'react-map-gl';
import type { MapRef, GeoJSONSource, LayerProps } from 'react-map-gl';
import { useRef } from 'react';
import type mapboxgl from 'mapbox-gl';
import styles from "./map.module.css";

const clusterLayer: LayerProps = {
	id: 'clusters',
	type: 'circle',
	source: 'users',
	filter: ['has', 'point_count'],
	paint: {
		'circle-color': ['step', ['get', 'point_count'], '#0693e3', 100, '#0693e3', 750, '#0693e3'],
		'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
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
		'circle-radius': 4,
		'circle-stroke-width': 1,
		'circle-stroke-color': '#fff'
	}
};

export interface PinGuestBookMapProps {
	pins: { username?: string, lat: number, lng: number }[];
}

export function GuestBookMap(props: PinGuestBookMapProps) {
	const mapRef = useRef<MapRef>(null);

	const onClick = (event: mapboxgl.MapLayerMouseEvent) => {


		// @ts-expect-error - Ignore type errors from MapBox...
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		const feature = event.features[0] as { properties: { cluster_id: number }, geometry: { coordinates: mapboxgl.LngLatLike } } | undefined;

		if (!feature) {
			console.log("CLICKED", event);
			return;
		}

		const clusterId = feature.properties.cluster_id
		const mapboxSource = mapRef.current?.getSource('earthquakes') as GeoJSONSource;

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

	return (
		<div className={styles.mapContainer}>
			<Map
				initialViewState={{
					latitude: 20,
					longitude: 10,
					zoom: 1.05
				}}
				interactiveLayerIds={[clusterLayer.id ?? ""]}
				mapStyle="mapbox://styles/mapbox/dark-v9"
				mapboxAccessToken="pk.eyJ1IjoiZWxpamFoY29iYiIsImEiOiJjbDYyczBveHUyYWJyM2lwNHpldnU0MmV0In0.58yRy97C4E9DbCZYy9s4Jw"
				onClick={onClick}
				ref={mapRef}
			>
				<Source
					cluster
					clusterMaxZoom={14}
					clusterRadius={50}
					// data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
					data={{
						type: "FeatureCollection",
						features: props.pins.map(pin => ({
							type: "Feature",
							properties: {
								id: pin.username
							},
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
		</div>
	);
}