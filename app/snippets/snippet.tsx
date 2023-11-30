import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Gist } from "../../data/types";
import { SnippetCode } from "./snippet-code-block";
import styles from "./snippet.module.css";
import { SnippetStats } from "./stats";
export interface SnippetProps {
	gist: Gist;
}

export function Snippet({ gist }: SnippetProps): JSX.Element {
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
		{gist.files.map(file => <SnippetCode file={file} key={file.name} />)}
	</div>
}