"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import type { Marker } from "./markers";

const WIDTH = 400;

export function Globe({ markers }: { markers: Marker[] }): JSX.Element {

	const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

	useEffect(() => {
		let phi = 0;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: WIDTH * 2,
			height: WIDTH * 2,
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

	useEffect(() => {
		const controller = new AbortController();
		fetch('/guests/markers', {
			method: "POST",
			signal: controller.signal,
		});
		return () => controller.abort();
	}, []);

	return <canvas
		ref={canvasRef}
		style={{ width: WIDTH, height: WIDTH, maxWidth: "100%", aspectRatio: 1 }}
	/>
}