import { Position } from "#/components/positions"
import { fetchPositions } from "#/data/positions"
import styles from "./page.module.css"

export default async function Page() {
	const positions = await fetchPositions();
	return <div className={styles.container}>
		<section className={styles.positions}>
			<h2>Positions</h2>
			{positions.map(pos => (
				<Position position={pos} key={pos.id} />
			))}
		</section>
	</div>
}