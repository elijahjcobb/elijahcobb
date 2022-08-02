import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
		<Icon className={styles.icon} size={32} />
	</button>
}

export function useControlledState<T>(value: T, ms: number): [T, Dispatch<SetStateAction<T>>] {
	const [debounced, setDebounced] = useState(value);
	const lastUpdated = useRef<number>(Date.now());

	const handleUpdate = (newValue: SetStateAction<T>) => {
		const now = Date.now();
		if ((now - lastUpdated.current) >= ms) {
			setDebounced(newValue);
			lastUpdated.current = now;
			return newValue;
		}
		return value;
	};

	return [debounced, handleUpdate];

}

export function UnsplashPage({ images }: UnsplashProps) {

	const [width, setWidth] = useState(0);
	const [index, setIndex] = useControlledState(0, 1000);
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

	useEffect(() => {
		const handler = (ev: KeyboardEvent) => {
			switch (ev.key) {
				case "ArrowLeft":
					return step(-1);
				case "ArrowRight":
				case "Enter":
				case " ":
					return step(1);
				case "Escape":
					return void router.push("/");
			}
		};
		window.addEventListener("keyup", handler);
		return () => window.removeEventListener("keyup", handler);
	}, [router, step]);

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
		<NavButton
			className={styles.next}
			enabled
			icon={canGoRight ? FaArrowRight : FaUndo}
			onClick={setNext}
		/>
		<span className={styles.status}>{`${index + 1} / ${images.length}`}</span>
		<a
			className={styles.link}
			href={`https://unsplash.com/photos/${images[index]?.id ?? ''}`}
			rel="noopener" target='_blank'>View on Unsplash</a>
		<div className={styles.carousel} style={{
			transform: `translate3d(0, 0, 0) translateX(-${index * width}px)`,
			width: `${images.length}00vw`
		}}>
			{images.map(image => {
				// eslint-disable-next-line @next/next/no-img-element
				return <img
					alt={image.description}
					className={styles.image}
					key={image.id}
					src={image.src}
				/>
			})}
		</div>
	</div>
}