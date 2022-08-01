import type { Ship } from "../../data/types";
import styles from "./index.module.css";
import { GoRepoForked, GoStar } from "react-icons/go";

export interface ShipsProps {
	ships: Ship[]
}

export function Ships(props: ShipsProps) {
	return <div className={styles.container}>
		<h1>Ships</h1>
		<div className={styles.table}>
			<span className={styles.header}>Year</span>
			<span className={styles.header}>Title</span>
			<span className={styles.header}>Description</span>
			<span className={styles.header}>Demo</span>
			{props.ships.map(ship => {
				return <>
					<span className={styles.date}>{(new Date(ship.createdAt)).getFullYear()}</span>
					<span className={styles.name}>{ship.name}</span>
					<span>{ship.description}</span>
					{/* <span>{Object.keys(ship.languages).join(", ")}</span>
					<div className={styles.stats}>
						<div className={styles.stat}>
							<GoStar />
							<span>{ship.stars}</span>
						</div>
						<div className={styles.stat}>
							<GoRepoForked />
							<span>{ship.forks}</span>
						</div>
					</div> */}
					<span>url</span>
				</>
			})}
		</div>
	</div>
}