import Link from "next/link";
import { PositionType } from "../../data/types";
import styles from "./position.module.css";

export function Position({ position }: { position: PositionType }) {
	return <div className={styles.container}>
		<p className={styles.text}>
			{position.position}
			<Link href={position.href} passHref>
				<a className={styles.org} rel='noreferrer noopener' target='_blank'>{' @ ' + position.name}</a>
			</Link>
		</p>
		<p className={styles.date}>{position.startDate + " - " + position.endDate}</p>
		<ul className={styles.positions}>
			{position.tasks.map(task => <li className={styles.position} key={task}>{task}</li>)}
		</ul>
	</div>
}