import { PropsWithChildren } from "react";
import styles from "./index.module.css";

export function FadeInContainer(props: PropsWithChildren<{}>) {
	return <div className={styles.fadeInContainer}>
		{props.children}
	</div>
}