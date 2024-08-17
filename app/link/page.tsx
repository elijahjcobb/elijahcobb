import styles from "./page.module.css";
import { LinkBuilder } from "./link-builder";
import { countLinks, getLatestLinks } from "../api/link/utils";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

export const revalidate = 60;

export default async function Page(): Promise<JSX.Element> {
	const links = await getLatestLinks(10);
	const count = await countLinks();
	return <div className={styles.container}>
		<section className={styles.top}>
			<h2>Link Shortener</h2>
			<p>A simple link shortener.</p>
		</section>
		<LinkBuilder />
		<section>
			<h3>Latest Links ({links.length}/{count})</h3>
			<ul className={styles.latestLinks}>
				{links.map(link => {
					return <li key={link.id} className={styles.row}>
						<Link className={styles.link} href={`/link/${link.id}`}>
							<span>{link.id}</span>
							<FiExternalLink />
						</Link>
					</li>
				})}
			</ul>
			<span className={styles.foot}>Fetched once a minute.</span>
		</section>
	</div >
}