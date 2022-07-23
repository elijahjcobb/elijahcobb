import type { PropsWithChildren } from "react";
import { Icon } from "../icon";
import styles from "./index.module.css";

export function LoadingScreen({
	children
}: PropsWithChildren) {
	return <div
		className={styles.container}
	>
		{children}
	</div>
}

export function IconLoadingScreen() {
	return <LoadingScreen>
		<Icon animate size={480} />
	</LoadingScreen>
}