/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import * as FS from "fs";
import styles from "../styles/publications.module.scss";
import ArticleIcon from '@mui/icons-material/Article';

interface PageProps {
	files: {name: string, url: string}[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.page}>
			<div className={styles.docs}>
				{props.files.map((doc, i) => {
					return <a rel={"noreferrer"} href={doc.url} target={"_blank"} key={i} className={styles.doc}>
						<ArticleIcon className={styles.icon}/>
						<span className={styles.name}>{doc.name}</span>
					</a>
				})}
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

	const ls = FS.readdirSync("public/publications")
	const files: {name: string, url: string}[] = [];

	for (const f of ls) {
		if (!f.endsWith(".pdf")) continue;
		const name = f.replace(".pdf", "");
		const url = encodeURI("/publications/" + f);
		files.push({name, url});
	}

	return {props: {files}}
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
