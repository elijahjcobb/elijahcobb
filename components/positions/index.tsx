import { useMemo } from "react";
import styles from "./index.module.css";
import { IoLogoVercel, IoLogoApple, } from "react-icons/io5";
import { BsFillStoplightsFill } from "react-icons/bs";
import { IconType } from "react-icons";
import { GiMoonOrbit } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import Link from "next/link";
import { PositionType } from "#/data/schemas";
import { OGLink } from "../links";


function iconForPosition(position: PositionType): IconType | null {

	switch (position.slug) {
		case "apple":
			return IoLogoApple;
		case "vercel":
			return IoLogoVercel;
		case "ampel":
			return BsFillStoplightsFill;
		case "pstdl":
			return GiMoonOrbit;
		case "coc":
			return FaUniversity;
		case "ss":
			return PiTestTubeFill;
		default:
			return null;
	}
}

export function Position({ position }: { position: PositionType }): JSX.Element {

	const dataString = useMemo(() => `${position.start_year}${position.end_year ? `-${position.end_year}` : ''}`, [position.end_year, position.start_year]);

	const Icon = useMemo(() => iconForPosition(position), [position]);

	return <div className={styles.position}>
		<div className={styles.top}>
			<Link target="_blank" href={position.href} className={styles.left}>
				{Icon ? <Icon className={styles.icon} /> : null}
				<b className={styles.name}>{position.name}</b>
			</Link>
			<span className={styles.years}>{dataString}</span>
		</div>
		<p className={styles.title}>{position.position}</p>
		{position.tasks ? <ul>
			{position.tasks.map(task =>
				<li key={task}>{task}</li>
			)}
		</ul> : null}
		{position.links ? <div className={styles.links}>
			{position.links.map(link => (
				<OGLink key={link} href={link} />
			))}
		</div> : null}
	</div>
}

