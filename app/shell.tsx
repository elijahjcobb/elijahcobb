import { NavBar } from "#/components/nav";
import { LeftBar } from "#/components/nav/left";
import { RightBar } from "#/components/nav/right";
import clsx from "clsx";
import styles from "./layout.module.css";

export function Shell({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<div className={styles.shell}>
			<NavBar />
			<div className={styles.main}>
				<LeftBar className={clsx(styles.sidebar, styles.left)} />
				<div className={styles.container}>{children}</div>
				<RightBar className={clsx(styles.sidebar, styles.right)} />
			</div>
		</div>
	);
}