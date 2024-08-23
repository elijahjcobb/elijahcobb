import { OGLink } from "#/components/links";
import { Position } from "#/components/positions"
import { fetchPositions, fetchLinks } from "#/data/positions"
import styles from "./page.module.css"

export default async function Page() {
	const positions = await fetchPositions()
	const links = await fetchLinks();
	return <div className={styles.container}>
		<section className={styles.positions}>
			<h2>Positions</h2>
			{positions.map(pos => (
				<Position position={pos} key={pos.id} />
			))}
		</section>
		<section className={styles.links}>
			<h2>Links</h2>
			<p>Some cool links I have found along the way...</p>
			{links.map(link => (
				<OGLink href={link.href} id={link.id} key={link.id} />
			))}
		</section>
	</div>
}