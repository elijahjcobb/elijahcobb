"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { Marker, addLocation } from "./markers";


export function Globe({ markers: initialMarkers }: { markers: Marker[] }): JSX.Element {

	const [markers, setMarkers] = useState<Marker[]>(initialMarkers);

	const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

	const width = useRef(Math.floor(window.screen.width * 0.4));

	useEffect(() => {
		let phi = 0;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width.current * 2,
			height: width.current * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 16000,
			mapBrightness: 6,
			baseColor: [0.4, 0.4, 0.5],
			markerColor: [0.1, 0.4, 0.8],
			glowColor: [0.1, 0.1, 0.2],
			markers,
			onRender: (state) => {
				state.phi = phi;
				phi += 0.005;
			}
		});

		return () => {
			globe.destroy();
		};
	}, [markers]);

	const [loading, setLoading] = useState(false);
	const [positionAdded, setPositionAdded] = useState(false);

	const addMyLocation = useCallback(() => {
		setLoading(true);
		fetch('/guests/markers', {
			method: "POST",
		})
			.then((res) => {
				if (!res.ok) throw new Error("Failed to update")
				return res;
			})
			.then(res => res.json())
			.then(({ lat, lng }) => {
				// setPositionAdded(true);
				setMarkers([...markers, { size: 0.3, location: [lat, lng] }]);
			}).catch(() => {
				alert("Failed to add your location");
			}).finally(() => {
				setLoading(false);
			});
	}, [markers]);

	return <div>
		<canvas
			ref={canvasRef}
			style={{ width: width.current, height: width.current, maxWidth: "100%", aspectRatio: 1 }}
		/>
		{positionAdded ? null : <button onClick={addMyLocation} disabled={loading}>Add My Location</button>}
	</div>
}