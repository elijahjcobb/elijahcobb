import Link from "next/link";
import { useMemo } from "react";
import { convertMonthYearDateToString } from "../../data/helpers";
import type { PositionType } from "../../data/types";
import styles from "./position.module.css";

export function Position({ position }: { position: PositionType }) {

	const startDate = useMemo(() => convertMonthYearDateToString(position.startDate), [position.startDate])
	const endDate = useMemo(() => convertMonthYearDateToString(position.endDate), [position.endDate])

	return <div className={styles.container}>
		<p className={styles.text}>
			{position.position}
			<Link href={position.href} passHref>
				<a className={styles.org} rel='noreferrer noopener' target='_blank'>{' @ ' + position.name}</a>
			</Link>
		</p>
		<p className={styles.date}>{`${startDate} - ${endDate}`}</p>
		<ul className={styles.positions}>
			{position.tasks.map(task => <li className={styles.position} key={task}>{task}</li>)}
		</ul>
	</div>
}