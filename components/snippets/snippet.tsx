/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Link from "next/link";
import { FaCode, FaGithub } from "react-icons/fa";
import type { Gist, GistFile } from "../../data/types";
import styles from "./snippet.module.css";
import { SnippetStats } from "./stats";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useMetric } from "../../data/track-hook";
import { useEffect, useRef } from "react";
import { useInViewport } from 'react-in-viewport';


export interface SnippetProps {
	gist: Gist;
}

export function SnippetCode({ file }: { file: GistFile }) {
	return <div className={styles.codeBlock}>
		<div className={styles.blockTop}>
			<span>{file.name}</span>
			<div className={styles.lang}>
				<FaCode />
				<span>{file.language}</span>
			</div>
		</div>
		<div className={styles.bottom}>
			<SyntaxHighlighter
				customStyle={{ width: "100%", background: 'none' }}
				language={file.language.toLowerCase()}
				showLineNumbers
				style={atomDark}>
				{file.content ?? ""}
			</SyntaxHighlighter>
		</div>
	</div >
}

export function Snippet({ gist }: SnippetProps) {
	const metric = useMetric();
	const ref = useRef<HTMLDivElement>(null);
	const { inViewport } = useInViewport(ref);

	useEffect(() => {
		metric(`snippet:view:${gist.id}`);
	}, [inViewport, gist.id, metric]);

	return <div className={styles.container} ref={ref}>
		<div className={styles.left}>
			<div className={styles.top}>
				<h1>{gist.description}</h1>
				<Link href={gist.url} passHref>
					<a className={styles.btn} onClick={() => {
						metric(`snippet:click:${gist.id}`)
					}} target="_blank">
						<FaGithub />
						<span>Open Gist</span>
					</a>
				</Link>
			</div>
			<SnippetStats className={styles.stats} gist={gist} />
		</div>
		{gist.content && <p className={styles.description}>{gist.content}</p>}
		{gist.files.map(file => <SnippetCode file={file} key={file.name} />)}
	</div>
}