import { convertMonthYearDateToString } from "#/data/helpers";
import { fetchPositions } from "#/data/static/positions";
import type { PositionType } from "#/data/types";
import Link from "next/link";
import styles from "./index.module.css";
import { OGLink } from "./og-link";
import { useMemo } from "react";
import { ExternalLink } from "#/components/external-link";
import { FiExternalLink } from "react-icons/fi";

function dateFromPosition(date: PositionType['startDate']): Date {
	return new Date(`${date.month}-1-${date.year}`);
}

function usePositionDuration(position: PositionType): string {
	return useMemo(() => {
		const start = dateFromPosition(position.startDate);
		const end = position.endDate ? dateFromPosition(position.endDate) : new Date();

		const diff = end.getTime() - start.getTime();

		const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
		const months = Math.floor((diff - (years * 1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

		const segments: string[] = [];

		if (years > 0) segments.push(`${years} year${years > 1 ? 's' : ''}`);
		if (months > 0 && months < 12) segments.push(`${months} month${months > 1 ? 's' : ''}`);
		if (segments.length === 0) return "Less than a month";

		return segments.join(", ")
	}, [position]);
}

function ResumePosition({ position }: { position: PositionType }): JSX.Element {

	const duration = usePositionDuration(position);

	return <li className={styles.position}>
		<h2>{position.position}</h2>
		<div className={styles.mid}>
			<span className={styles.business}>{position.name}</span>
			{position.href ? <ExternalLink href={position.href}>
				<FiExternalLink size={24} />
			</ExternalLink> : null}
			<span>·</span>
			<span className={styles.date}>{convertMonthYearDateToString(position.startDate)} - {convertMonthYearDateToString(position.endDate)}</span>
			<span>·</span>
			<span className={styles.date}>{duration}</span>
		</div>
		{position.tasks ? <ul className={styles.tasks}>
			{position.tasks.map(task => <li className={styles.task} key={task}>{task}</li>)}
		</ul> : null}
		{position.links ? <div className={styles.linkContainer}>
			<ul className={styles.links}>
				{position.links.map(href => <OGLink href={href} key={href} />)}
			</ul>
		</div> : null}
	</li>
}

export default function ResumePage(): JSX.Element {
	return <div className={styles.page}>
		<h1>Positions</h1>
		<ul className={styles.positions}>
			{fetchPositions().map(p => <ResumePosition key={p.key} position={p} />)}
		</ul>
	</div>
}