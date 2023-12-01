import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Gist, GistFile } from "../../data/types";
import { SnippetCode } from "./snippet-code-block";
import styles from "./snippet.module.css";
import { SnippetStats } from "./stats";
import { fetchGistFileData } from "#/data/github";

export interface SnippetProps {
	gist: Gist;
}

export function Snippet({ gist }: SnippetProps): JSX.Element {
	console.log(gist)
	return <div className={styles.container}>
		<div className={styles.left}>
			<div className={styles.top}>
				<h1>{gist.description}</h1>
				<Link className={styles.btn} href={gist.url} target="_blank">
					<FaGithub />
					<span>Open Gist</span>
				</Link>
			</div>
			<SnippetStats className={styles.stats} gist={gist} />
		</div>
		{gist.content ? <p className={styles.description}>{gist.content}</p> : null}
		{gist.files.map(file => <SnippetRSC file={file} key={file.name} />)}
	</div>
}

async function SnippetRSC({ file }: { file: GistFile }): Promise<JSX.Element> {
	const content = await fetchGistFileData(file);
	return <SnippetCode file={file} content={content} />
}