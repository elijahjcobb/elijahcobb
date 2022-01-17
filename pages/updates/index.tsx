/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import * as FS from "fs";
import matter from "gray-matter";
import styles from "../../styles/updates.module.scss";

interface Update {
	url: string;
	title: string;
	date: string;
	description?: string;
	readMore: boolean;
}

interface PageProps {
	updates: Update[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.items}>
			{props.updates.sort((a, b) => {
				const aDate = new Date(a.date);
				const bDate = new Date(b.date);
				return (aDate < bDate) ? 1 : -1
			}).map((v, i) => {
				return (<a
					href={v.url}
					className={styles.item}
					key={i}>
					<div className={styles.top}>
						<span className={styles.title}>{v.title}</span>
						<span className={styles.date}>{new Date(v.date).toLocaleDateString()}</span>
					</div>
					{((v.description?.length ?? 0) > 0) && <span className={styles.description}>{v.description}</span>}
					{v.readMore && <span className={styles.read}>Read more...</span>}
				</a>)
			})}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

	const files = FS.readdirSync("updates").map(v => "updates/" + v);
	const updates: Update[] = [];

	for (const f of files) {
		const data = FS.readFileSync(f).toString("utf8");
		const file = matter(data);
		const meta = file.data as {title: any, date: any, description: any};
		if (typeof meta.title !== "string") continue;
		if (typeof meta.date !== "string") continue;
		const url = encodeURI("/" + f.replace(".md", ""));
		updates.push({url, title: meta.title, date: meta.date, description: meta.description ?? "", readMore: file.content.length !== 0})
	}


	return {props: {updates}}
}

// export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;
