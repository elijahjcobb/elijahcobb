import { getFiles } from "./[slug]/parse-file";
import Link from "next/link";
import styles from "./index.module.css";

export const dynamic = 'force-static';

export default async function Page(): Promise<JSX.Element> {
	const files = await getFiles();
	return <>
		<h1 className={styles.title}>Blog</h1>
		<ul className={styles.list}>
			{files.map(file => <li key={file.slug}>
				<Link href={`/blog/${file.slug}`}>
					<div className={styles.item}>
						<h2>{file.title}</h2>
						<p>{file.description}</p>
					</div>
				</Link>
			</li>)}
		</ul></>
}