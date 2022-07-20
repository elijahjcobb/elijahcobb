import { About } from "../about";
import { Icon } from "../icon";
import { Positions } from "../work";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";

export function HomePage() {
	return <div className={styles.container}>
		<div className={styles.header}>
			<div><Icon animate size={320} /></div>
			<div className={styles.text}>
				<span className={styles.head}>Hello, my name is</span>
				<h1 className={styles.name}>Elijah Cobb</h1>
				<span className={styles.subheader}>I am a Full Stack Engineer in Seattle, WA.</span>
				<Link href="/#about" passHref>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a className={styles.down}>
						<FaArrowDown color='var(--secondary)' size={32} />
					</a>
				</Link>
			</div>
		</div>
		<About />
		<Positions />
	</div>
}