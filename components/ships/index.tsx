import type { Ship } from "../../data/types";
import styles from "./index.module.css";

export interface ShipsProps {
	ships: Ship[]
}

export function Ships(props: ShipsProps) {
	return <div className={styles.container}>
		<h1>Ships</h1>
		<div className={styles.table}>
			{props.ships.map(ship => {
				return <a
					className={styles.row}
					href={`https://github.com/${ship.slug}`}
					key={ship.slug}
					rel="noopener" target='_blank'>
					<span className={styles.date}>{(new Date(ship.createdAt)).getFullYear()}</span>
					<span className={styles.name}>{ship.name}</span>
					<span className={styles.description}>{ship.description}</span>
				</a>
			})}
		</div>
	</div>
}