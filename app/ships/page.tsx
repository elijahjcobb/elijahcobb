import styles from "./index.module.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { ExternalLink } from "#/components/external-link";
import { RiShip2Fill } from "react-icons/ri";
import { BiLoader } from "react-icons/bi";
import { FaTrophy, FaBriefcase } from "react-icons/fa";
import { fetchShips } from "#/data/ships";

export const revalidate = 60;

export default async function Ships(): Promise<JSX.Element> {

	const ships = await fetchShips();

	return <div className={styles.container}>
		<h1>Ships</h1>
		<div className={styles.table}>
			{ships.map(ship => {
				const Icon = ship.work ? FaBriefcase : (ship.wip ? BiLoader : (ship.trophy ? FaTrophy : RiShip2Fill));
				return <div className={styles.row} key={ship.name}>
					<Icon className={styles.typeIcon} />
					<span className={styles.date}>{ship.year}</span>
					<span className={styles.name}>{ship.name}</span>
					<span className={styles.description}>{ship.description}</span>
					<div className={styles.buttons}>
						{ship.github_slug ? <ExternalLink className={styles.github} href={`https://github.com/${ship.github_slug}`} ><FiGithub className={styles.icon} /></ExternalLink> : null}
						{ship.url ? <ExternalLink className={styles.link} href={ship.url}><FiExternalLink className={styles.icon} /></ExternalLink> : null}
					</div>
				</div>
			})}
		</div>
	</div>
}