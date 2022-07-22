import type { PropsWithChildren } from "react";
import { Icon } from "../icon";
import styles from "./index.module.css";

export interface LoadingScreenProps {
	duration?: number;
	delay?: number;
}

export function LoadingScreen({
	duration = 2000,
	delay = 0,
	children
}: PropsWithChildren<LoadingScreenProps>) {
	return <div
		className={styles.container}
	>
		{children}
	</div>
}

export function IconLoadingScreen(props: LoadingScreenProps) {
	return <LoadingScreen {...props}>
		<Icon animate size={480} />
	</LoadingScreen>
}