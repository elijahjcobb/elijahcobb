import { fetchLink } from "#/data/links";
import { LinkGetType } from "#/data/schemas";
import { redirect } from 'next/navigation'
import styles from "./page.module.css";
import Link from "next/link";
import moment from "moment";

export const revalidate = 0;

export default async function Page({ params }: { params: { id: string } }): Promise<JSX.Element> {
	const id = params.id;
	let meta: LinkGetType;
	try {
		meta = await fetchLink(id);
	} catch (e) {
		console.error(e);
		redirect("/link");
	}
	const { href, hits, created_at, updated_at } = meta;

	const link = `https://elijahcobb.com/${id}`

	const lastHit = moment(updated_at).subtract(7, 'hour').fromNow()
	const createdAt = moment(created_at).subtract(7, 'hour');
	const createdAgo = createdAt.fromNow();

	return <div className={styles.container}>
		<section>
			<h2>Link Shortener</h2>
			<p>A simple link shortener.</p>
		</section>
		<section>
			<h3>ID</h3>
			<code>{id}</code>
		</section>
		<section>
			<h3>Link</h3>
			<code><Link target="_blank" href={link}>{link}</Link></code>
		</section>
		<section>
			<h3>Source</h3>
			<code><Link target="_blank" href={href}>{href}</Link></code>
		</section>
		<section>
			<h3>Hits</h3>
			<p>{hits.toLocaleString()}</p>
		</section>
		<section>
			<h3>Last Hit</h3>
			<p>{hits > 0 ? lastHit : '-'}</p>
		</section>
		<section>
			<h3>Created At</h3>
			<p>{`${createdAt.format("ddd, M-D-YY [at] h:m:sa")} (${createdAgo})`}</p>
		</section>
	</div>
}