import { LeftBar } from "../nav/left";
import { NavBar } from "../nav";
import { RightBar } from "../nav/right";
import styles from "./index.module.css";

export function Shell({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.shell}>
			<NavBar />
			<div className={styles.main}>
				<LeftBar className={styles.sidebar} />
				<div className={styles.container}>{children}</div>
				<RightBar className={styles.sidebar} />
			</div>

		</div>
	);
}