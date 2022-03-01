/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import * as FS from "fs";
import matter from "gray-matter";
import styles from "../../styles/updates.module.scss";
import {fetchUpdates, Update} from "../../components/update-loader";
import {UpdateRow} from "../../components/UpdateRow";

interface PageProps {
	updates: Update[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.items}>
			<title>Elijah Cobb | Updates</title>
			{props.updates.map((v, i) => {
				return <UpdateRow key={i} {...v}/>
			})}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

	return {props: {updates: await fetchUpdates()}}
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
