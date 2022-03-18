/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import styles from "../styles/CompanyRow.module.scss";
import {Company, Position} from "./positions";
import dateFormat from "dateformat";
import formatDuration from "date-fns/formatDuration";
import {intervalToDuration} from "date-fns";

export interface CompanyRowProps {
	company: Company;
}

function dateString(value: Date): string {
	return dateFormat(value, "mmm yyyy");
}

function durationString(s: Date, e: Date): string {
	let str = formatDuration(intervalToDuration({start: s, end: e}), {
		format: ["years", "months"]
	});
	if (str.length === 0) return str;
	return " • " + str;
}

const PositionItem: FC<{
	position: Position,
}> = props => {

	const {start, content, title, end} = props.position;

	const startDate = new Date(start);
	let endDate: Date | undefined;
	if (end) endDate = new Date(end.replaceAll("-", "/"));
	else endDate = new Date();

	const duration = durationString(startDate, endDate);

	return <div className={styles.item}>
		<span className={styles.title}>{title}<div className={styles.circle}/><div className={styles.line}/></span>
		<span className={styles.subtitle}>{dateString(startDate) + (end ? (" - " + dateString(endDate)) : "") + duration}</span>
		{content && <span>{content}</span>}
	</div>
}

export const CompanyRow: FC<CompanyRowProps> = props => {

	const {name, location, positions, image} = props.company;

	let smallestStart = new Date();
	let biggestEnd = new Date("1/1/2000");

	for (const p of positions) {
		const s = new Date(p.start);
		const e = p.end ? new Date(p.end) : new Date();
		if (s < smallestStart) smallestStart = s;
		if (e > biggestEnd) biggestEnd = e;
	}

	const duration = durationString(smallestStart, biggestEnd);

	return (<div
			onClick={() => {
				window.open(props.company.link);
			}}
			className={styles.container}>
		<img src={image} alt={"logo"} className={styles.img}/>
		<div className={styles.right}>
			<div className={styles.item}>
				<span className={styles.name}>{name}</span>
				<span className={styles.subtitle}>{location + duration}</span>
			</div>
			{positions.map((p, i) => <PositionItem position={p} key={i}/>)}
		</div>
	</div>);

};