"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import createGlobe from "cobe";
import type { Marker } from "./markers";

const DEFAULT_SIZE = 480;

export function Globe({ markers, fullWidth }: { markers: Marker[]; fullWidth?: boolean; }): JSX.Element {

	const canvasRef = useRef<HTMLCanvasElement>({} as HTMLCanvasElement);

	useEffect(() => {
		let phi = 0;

		const fullSize = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
		const width = fullWidth ? (Math.ceil(fullSize)) : DEFAULT_SIZE;

		const globe = createGlobe(canvasRef.current, {
			devicePixelRatio: 2,
			width: width * 2,
			height: width * 2,
			phi: 0,
			theta: 0,
			dark: 1,
			diffuse: 1.2,
			mapSamples: 32_000,
			mapBrightness: 2,
			baseColor: [0.4, 0.4, 0.8],
			markerColor: [0.94, 0.501, 0.2354],
			glowColor: [0.1, 0.1, 0.2],
			markers,
			onRender: (state) => {
				state.phi = phi;
				phi -= 0.005;
			}
		});

		return () => {
			globe.destroy();
		};
	}, [markers, fullWidth]);

	useEffect(() => {
		const controller = new AbortController();
		fetch('/guests/markers', {
			method: "POST",
			signal: controller.signal,
		});
		return () => controller.abort();
	}, []);

	return <div style={fullWidth ? {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh'
	} : {}}>
		<canvas
			ref={canvasRef}
			style={{
				aspectRatio: 1,
				display: 'block',
				...(fullWidth ? { height: '100%' } : { width: DEFAULT_SIZE, height: DEFAULT_SIZE })
			}}
		/>
	</div>
}