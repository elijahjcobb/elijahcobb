/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetServerSideProps, GetStaticProps} from "next";
import styles from "../../styles/updates.module.scss";
import {fetchUpdates, Update} from "../../components/update-loader";
import {UpdateRow} from "../../components/UpdateRow";
import Head from "next/head";
import path from "path";

interface PageProps {
	updates: Update[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.items}>
			<Head>
				<title>Elijah Cobb | Updates</title>
			</Head>
			{props.updates.map((v, i) => {
				return <UpdateRow key={i} {...v}/>
			})}
		</div>
	);
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
	return {props: {updates: await fetchUpdates()}}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;
