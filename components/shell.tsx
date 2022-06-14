import { LeftBar } from "./left-bar";
import { NavBar } from "./nav-bar";
import { RightBar } from "./right-bar";
import styles from "./shell.module.css";

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