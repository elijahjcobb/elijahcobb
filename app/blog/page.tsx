import { readdir } from "fs/promises"
import { MDFile, parseFile } from "./[slug]/parse-file";
import Link from "next/link";
import styles from "./index.module.css";

async function getFileNames(): Promise<string[]> {
	return await readdir('./posts');
}

async function getFiles(): Promise<MDFile[]> {
	const fileNames = await getFileNames();
	const files = await Promise.all(fileNames.map(file => {
		const slug = file.replace('.mdx', '');
		return parseFile(slug);
	}));
	return files.sort((a, b) => {
		const aDate = new Date(a.date);
		const bDate = new Date(b.date);
		return bDate.getTime() - aDate.getTime();
	});
}

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