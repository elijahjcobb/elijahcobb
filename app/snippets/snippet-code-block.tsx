'use client';
import { FaCode } from "react-icons/fa";
import type { GistFile } from "../../data/types";
import styles from "./snippet.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function SnippetCode({ file, content }: { file: GistFile, content: string }): JSX.Element {
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
				{content}
			</SyntaxHighlighter>
		</div>
	</div >
}