import Link from "next/link";
import { Suspense } from "react";
import styles from "./og-link.module.css";

export function OGLink(props: { href: string }): JSX.Element {
	return <Suspense fallback={<p>hi</p>}>
		<OGCard {...props} />
	</Suspense>
}

interface OGData {
	title: string;
	description: string;
	image: string;
	siteName: string;
	domain: string;
}

const TITLE_LENGTH = 48;
const DESC_LENGTH = 100;

async function fetchOGData(href: string): Promise<Partial<OGData>> {
	const resp = await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(href)}?app_id=${process.env.OPEN_GRAPH_KEY ?? ""}`);
	const json = await resp.json();


	let title = (json?.hybridGraph?.title) as string | undefined;

	if (title && title.length > TITLE_LENGTH) {
		title = title.substring(0, TITLE_LENGTH - 3) + "..."
	}
	let description = (json?.hybridGraph?.description) as string | undefined

	if (description && description.length > DESC_LENGTH) {
		description = description.substring(0, DESC_LENGTH - 3) + "..."
	}

	return {
		title,
		description,
		image: json?.hybridGraph?.image,
		siteName: json?.hybridGraph?.site_name,
		domain: new URL(href).hostname.replace('www.', '')
	}
}

async function OGCard({ href }: { href: string }): Promise<JSX.Element> {
	const { title, description, image, domain } = await fetchOGData(href);
	return <Link className={styles.link} href={href} target="_blank">
		{/* eslint-disable-next-line @next/next/no-img-element */}
		{image ? <img alt={title} className={styles.image} src={image} /> : null}
		<div className={styles.text}>
			{title ? <span className={styles.title}>{domain} | {title}</span> : null}
			{description ? <span className={styles.description}>{description}</span> : null}
		</div>
	</Link>
}