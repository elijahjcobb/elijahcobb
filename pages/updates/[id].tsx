/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetServerSideProps, GetStaticProps, GetStaticPaths} from "next";
import * as FS from "fs";
import matter from "gray-matter";
import styles from "../../styles/update.module.scss";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import formatRelative from "date-fns/formatRelative";
import Head from 'next/head'
import formatDuration from "date-fns/formatDuration";
import {intervalToDuration} from "date-fns";


interface PageProps {
	title: string;
	description: string;
	date: string;
	content: string;
}

const Page: NextPage<PageProps> = props => {

	const wordCount = props.content.match(/(\w+)/g)?.length ?? 0
	const wpm = 300;
	const m = (wordCount / wpm) + 1;
	const mString = m.toFixed(0);

	let d = formatDuration(intervalToDuration({start: new Date(props.date.replaceAll("-", "/")), end: new Date()}), {
		format: ["years", "months", "weeks"]
	});
	if (d.length === 0) d = "today"
	else d += " ago";

	return (
		<div className={styles.page}>
			<Head>
				<title>{"Elijah Cobb | " + props.title}</title>
			</Head>
			<div className={styles.header}>
				<h2>{props.title}</h2>
				<p className={styles.date}>{d + " • about a " + mString + " min read"}</p>
				{props.description && <p>{props.description}</p>}
			</div>
			<ReactMarkdown
				className={styles.md}
				components={{
					a({children, ...props}) {
						return <a rel="noreferrer" href={props.href} target={"_blank"}>{children}</a>
					},
					h1({children}) {
						return <h3>{children}</h3>
					},
					h2({children}) {
						return <h3>{children}</h3>
					},
					h3({children}) {
						return <h3>{children}</h3>
					},
					code({node, inline, className, children, ...props}) {
						const match = /language-(\w+)/.exec(className || '')
						return !inline && match ? (
							<SyntaxHighlighter
								language={match[1]}
								PreTag="div"
								{...props}
							>
								{String(children).replace(/\n$/, '')}
							</SyntaxHighlighter>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						)
					}
				}}
				remarkPlugins={[remarkMath, remarkGfm]}
				rehypePlugins={[rehypeKatex]}>
				{props.content}
			</ReactMarkdown>
		</div>
	);
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {

	const url = (context.params as {id: string}).id;
	const file = FS.readFileSync("updates/" + url + ".md").toString("utf8");
	const meta = matter(file);
	const data = meta.data;

	return {
		props: {
			title: data.title ?? "",
			description: data.description ?? "",
			date: data.date ?? "1-1-2000",
			content: meta.content ?? ""
		}
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: FS.readdirSync("updates").map(f => {
			return {params: {id: f.replace(".md", "")}}
		}),
		fallback: false
	}
}

export default Page;
