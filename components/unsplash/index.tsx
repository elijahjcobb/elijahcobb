import { off } from "process";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Unsplash } from "../../data/types"
import styles from "./index.module.css";
import { FaArrowRight, FaArrowLeft, FaTimes, FaUndo } from "react-icons/fa";
import type { IconType } from "react-icons";
import { useRouter } from "next/router";

export interface UnsplashProps {
	images: Unsplash[];
}

export function NavButton(props: {
	onClick: () => void,
	className?: string,
	icon: IconType
	enabled: boolean;
}) {
	const Icon = props.icon;
	return <button
		className={props.className}
		onClick={props.onClick}
		style={{ opacity: props.enabled ? 1 : 0 }}
		type='button'
	>
		<Icon color="var(--primary)" size={32} />
	</button>
}

export function UnsplashPage({ images }: UnsplashProps) {

	const [width, setWidth] = useState(0);
	const [index, setIndex] = useState(0);
	const router = useRouter();

	const canGoLeft = useMemo(() => {
		return index > 0;
	}, [index]);

	const canGoRight = useMemo(() => {
		return index < images.length - 1;
	}, [index, images.length]);

	const step = useCallback((direction: number) => {
		setIndex(v => {
			let val = v + direction;
			if (val > images.length - 1) val = 0;
			else if (val < 0) val = 0;
			return val;
		});
	}, [images.length, setIndex]);

	const setNext = useCallback(() => step(1), [step]);
	const setPrevious = useCallback(() => step(-1), [step]);

	useEffect(() => {
		setWidth(window.innerWidth);
		const handler = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", handler);
		return () => window.removeEventListener("resize", handler);
	}, []);

	return <div className={styles.root}>
		<NavButton
			className={styles.close}
			enabled
			icon={FaTimes}
			onClick={() => {
				void router.push("/");
			}}
		/>
		<NavButton
			className={styles.previous}
			enabled={canGoLeft}
			icon={FaArrowLeft}
			onClick={setPrevious}
		/>
		{canGoRight && <NavButton
			className={styles.next}
			enabled
			icon={FaArrowRight}
			onClick={setNext}
		/>}
		{!canGoRight && <NavButton
			className={styles.next}
			enabled
			icon={FaUndo}
			onClick={() => setIndex(0)}
		/>}
		<div className={styles.carousel} style={{
			transform: `translate3d(0, 0, 0) translateX(-${width * index}px)`,
			width: `${images.length}00vw`
		}}>
			{images.map(image => {
				// eslint-disable-next-line @next/next/no-img-element
				return <img
					alt={image.description}
					className={styles.image}
					key={image.href}
					src={image.href}
				/>
			})}
		</div>
	</div>
}