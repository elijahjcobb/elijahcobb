import blogStyles from "./blog.module.css";
import styles from "./index.module.css";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FaReadme, FaCalendar, FaEye } from "react-icons/fa6";
import { Reporter } from "./reporter";
import type { MDXComponents } from "mdx/types";
import { SnippetCode } from "#/app/snippets/snippet-code-block";
import { getFileNames, parseFile } from "./parse-file";

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

const components: MDXComponents = {
	pre: (props) => {
		// @ts-expect-error - just ignore this
		const languageCode = props?.children?.props?.className.replace('language-', '');

		const language = languageFromExtension(languageCode);

		// @ts-expect-error - just ignore this
		const content = props.children.props.children;
		return <div className={blogStyles.codeBlock}>
			<SnippetCode content={content} file={{ name: '', language, url: 'null', content }} />
		</div>
	}
}

export default async function Page({
	params
}: {
	params: { slug: string }
}): Promise<JSX.Element> {

	const {
		title,
		releaseTiming,
		readTime,
		description,
		content,
		views
	} = await parseFile(params.slug);

	return (
		<div>
			<div className={styles.header}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.pills}>
					<p className={styles.date}><FaCalendar />{releaseTiming}</p>
					<p className={styles.duration}><FaReadme />{readTime}</p>
					<p className={styles.date}><FaEye />{views} views</p>
				</div>
				<p className={styles.description}>{description}</p>
			</div>
			<div className={blogStyles.blog}>
				<Reporter slug={params.slug} />
				<MDXRemote components={components} source={content} />
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const posts = await getFileNames();
	return posts.map((slug) => ({
		slug
	}))

}