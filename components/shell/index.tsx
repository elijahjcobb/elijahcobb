import { LeftBar } from "../nav/left";
import { NavBar } from "../nav";
import { RightBar } from "../nav/right";
import styles from "./index.module.css";
import cn from "clsx";

export function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.shell}>
			<NavBar />
			<div className={styles.main}>
				<LeftBar className={cn(styles.sidebar, styles.left)} />
				<div className={styles.container}>{children}</div>
				<RightBar className={cn(styles.sidebar, styles.right)} />
			</div>

		</div>
	);
}