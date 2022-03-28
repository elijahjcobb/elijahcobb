/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type { NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Mountain } from "../components/Mountain";
import styles from "../styles/index.module.scss";
import { Sky } from "../components/Sky";
import { NavBar } from "../components/navbar";
import profilePic from "../public/profile-cas-clear.png";
import Image from "next/image";
import { Typr } from "../components/Typr";
import { ProjectsTable } from "../components/ProjectsTable";
import { ProjectRowProps } from "../components/ProjectRow";
import {IProject, projects} from "../data/projects";

interface PageProps {
	projects: IProject[];
}

const Page: NextPage<PageProps> = props => {
	return <div className={styles.main}>
		{/*<NavBar/>*/}
		<Sky className={styles.sky} />
		<Mountain className={styles.mountain} />
		<div className={styles.body}>
			<div className={styles.container}>
				<div className={styles.hero}>
					<img src={"/profile-cas-clear.png"} alt={"profile"} className={styles.profile} />
					<div className={styles.title}>
						<Typr content={["Hello, my name is,"]} wrapper={"p"} />
						<Typr content={[1400, "Elijah Cobb!"]} cursor={false} wrapper={"h1"} />
					</div>
				</div>
				<ProjectsTable projects={props.projects} />
			</div>
		</div>
	</div>;
};

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
	return {
		props: { projects }
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;
