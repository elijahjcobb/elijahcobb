'use client';
import { FaCopy } from "react-icons/fa";
import type { GistFile } from "../../data/types";
import styles from "./snippet-code-block.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCallback } from "react";
import toast from "react-hot-toast";

export function SnippetCode({ file, content }: { file: GistFile, content: string }): JSX.Element {

	const copyToClipboard = useCallback(() => {
		navigator.clipboard.writeText(content)
			.then(() => {
				toast.success("Copied to clipboard.");
			})
			.catch(() => {
				toast.error("Failed to copy to clipboard.");
			})
	}, [content]);

	return <div className={styles.codeBlock}>
		<button onClick={copyToClipboard} className={styles.button}><FaCopy size={20} /></button>
		<SyntaxHighlighter
			customStyle={{ width: "100%", background: 'none' }}
			language={file.language.toLowerCase()}
			style={oneDark}>
			{content}
		</SyntaxHighlighter>
	</div >
}