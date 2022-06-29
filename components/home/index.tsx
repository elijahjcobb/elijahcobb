import { About } from "../about";
import { Icon } from "../icon";
import { Positions } from "../work";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";

export function HomePage() {
	return <div className={styles.container}>
		<div className={styles.header}>
			<div><Icon size={320} animate /></div>
			<div className={styles.text}>
				<span className={styles.head}>Hello, my name is</span>
				<h1 className={styles.name}>Elijah Cobb</h1>
				<span className={styles.subheader}>I am a Full Stack Engineer in Seattle, WA.</span>
				<Link href={"/#about"} passHref>
					<a className={styles.down}>
						<FaArrowDown size={32} color='var(--secondary)' />
					</a>
				</Link>
			</div>
		</div>
		<About />
		<Positions />
	</div>
}