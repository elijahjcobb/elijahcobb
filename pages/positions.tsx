/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import styles from "../styles/CompanyRow.module.scss";
import React from "react";
import {Company, positions} from "../components/positions";
import {CompanyRow} from "../components/CompanyRow";

interface PageProps {
	positions: Company[];
}

const Page: NextPage<PageProps> = props => {
	return (<div className={styles.root}>
		{props.positions.map((p, i) => <CompanyRow company={p} key={i}/>)}
	</div>);
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {

	return {
		props: {positions}
	}
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
