import styles from "./index.module.css";
import Link from "next/link";
import { type OGMetadataType } from "#/data/schemas";
import { MdImageNotSupported } from "react-icons/md";
import { MdError } from "react-icons/md";
import { fetchOG } from "#/app/api/og/[id]/utils";

export async function OGLink({ href }: { href: string }): Promise<JSX.Element> {

	let data: OGMetadataType | null;
	try {
		data = await fetchOG(href);
	} catch (e) {
		data = null;
	}

	if (!data) {

		let url: URL | null

		try {
			url = new URL(href ?? "");
		} catch (_) {
			url = null;
		}

		if (url) {
			return <Link href={url} target="_blank" className={styles.card}>
				<MdImageNotSupported className={styles.placeholderIcon} />
			</Link>
		} else {
			return <div className={styles.card}>
				<MdError className={styles.placeholderIcon} />
			</div>
		}
	}

	return <Link href={href ?? data.url} target="_blank" className={styles.card}>
		{data.image ? <img className={styles.image} src={data.image} /> : <div className={styles.placeholder}><MdImageNotSupported className={styles.placeholderIcon} /></div>}
		<div className={styles.container}>
			<p className={styles.title}>{data.title ?? data.domain ?? "-"}</p>
			<p className={styles.domain}>{data.domain ?? "-"}</p>
		</div>
	</Link>
}