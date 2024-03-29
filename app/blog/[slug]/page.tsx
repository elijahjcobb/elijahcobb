import blogStyles from "./blog.module.css";
import styles from "./index.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FaReadme, FaCalendar, FaEye } from "react-icons/fa6";
import type { MDXComponents } from "mdx/types";
import { SnippetCode } from "#/app/snippets/snippet-code-block";
import { MDFile, getFileNames, parseFile } from "./parse-file";
import { Reporter } from "./reporter";
import Link from "next/link";
import sluga from "sluga";

export const revalidate = 10;

function languageFromExtension(extension: string): string {
	switch (extension) {
		case 'ts':
		case 'tsx':
			return 'TypeScript';
		case 'js':
		case 'jsx':
			return 'JavaScript';
		case 'c':
		case 'h':
			return 'C';
		case 'cpp':
		case 'hpp':
			return 'C++';
		case 'rs':
			return 'Rust';
		case 'py':
			return 'Python';
		case 'swift':
			return 'Swift';
		case 'html':
			return 'HTML';
		case 'css':
			return 'CSS';
		case 'json':
			return 'JSON';
		case 'xml':
			return 'XML';
		case 'yml':
		case 'yaml':
			return 'YAML';
		case 'md':
			return 'Markdown';
		case 'sh':
		case 'bash':
			return 'Bash';
		default:
			return extension;
	}
}

const components = (file: MDFile): MDXComponents => ({
	pre: (props) => {
		// @ts-expect-error - just ignore this
		const languageCode = props?.children?.props?.className.replace('language-', '');

		const language = languageFromExtension(languageCode);

		// @ts-expect-error - just ignore this
		const content = props.children.props.children;
		return <div className={blogStyles.codeBlock}>
			<SnippetCode content={content} file={{ name: '', language, url: 'null', content }} />
		</div>
	},
	a: (props) => {
		return <Link href={props.href!} target="_blank">{props.children}</Link>
	},
	h1: (props) => {
		const slug = sluga(props.children as string)
		return <Link href={`#${slug}`} id={slug} className={blogStyles.h1}>{props.children}</Link>
	}
})

export default async function Page({
	params
}: {
	params: { slug: string }
}): Promise<JSX.Element> {

	const file = await parseFile(params.slug);

	const {
		title,
		releaseTiming,
		readTime,
		description,
		content,
		date,
		views
	} = file;

	return (
		<div className={styles.blog}>
			<div className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.pills}>
					<p className={styles.date}><FaCalendar />{date} ({releaseTiming})</p>
					<p className={styles.duration}><FaReadme />{readTime}</p>
					<p className={styles.views}><FaEye />{views.toLocaleString()} views</p>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={blogStyles.blog}>
				<Reporter slug={params.slug} />
				<MDXRemote components={components(file)} source={content} />
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const posts = await getFileNames();
	return posts.map((slug) => ({ slug }))
}