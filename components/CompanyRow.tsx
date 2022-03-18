/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import styles from "../styles/CompanyRow.module.scss";
import {Company, Position} from "./positions";
import dateFormat from "dateformat";
import formatRelative from "date-fns/formatRelative";

export interface CompanyRowProps {
	company: Company;
}

function dateString(value: Date): string {
	return dateFormat(value, "mmm yyyy");
}

const PositionItem: FC<{
	position: Position,
}> = props => {

	const {start, content, title, end} = props.position;

	const startDate = new Date(start);
	let endDate: Date | undefined;
	if (end) endDate = new Date(end.replaceAll("-", "/"));
	else endDate = new Date();

	return <div className={styles.item}>
		<span className={styles.title}>{title}<div className={styles.circle}/></span>
		<span className={styles.subtitle}>{dateString(startDate) + (end ? (" - " + dateString(endDate)) : "")}</span>
		{content && <span>{content}</span>}
	</div>
}

export const CompanyRow: FC<CompanyRowProps> = props => {

	const {name, location, positions, image} = props.company;

	return (<div className={styles.container}>
		<img src={image} alt={"logo"} className={styles.img}/>
		<div className={styles.right}>
			<div className={styles.item}>
				<span className={styles.name}>{name}</span>
				<span className={styles.subtitle}>{location}</span>
			</div>
			{positions.map((p, i) => <PositionItem position={p} key={i}/>)}
		</div>
	</div>);

};