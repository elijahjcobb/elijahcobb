'use client';
import { FaCode, FaCopy } from "react-icons/fa";
import type { GistFile } from "../../data/types";
import styles from "./snippet.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCallback } from "react";

export function SnippetCode({ file, content }: { file: GistFile, content: string }): JSX.Element {

	const copyToClipboard = useCallback(() => {
		void navigator.clipboard.writeText(content);
	}, [content]);

	return <div className={styles.codeBlock}>
		<div className={styles.blockTop}>
			<div className={styles.lang}>
				<FaCode />
				<span>{file.language}</span>
			</div>
			<button onClick={copyToClipboard} className={styles.button}><FaCopy size={20} /></button>
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