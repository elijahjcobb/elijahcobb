/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import styles from "../styles/home.module.scss";
import {fetchUpdates, Update} from "../components/update-loader";
import {UpdateRow} from "../components/UpdateRow";

interface PageProps {
	updates: Update[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<img className={styles.profile} alt={"elijah"} src={"/profile.jpg"}/>
				<div className={styles.text}>
					<span className={styles.title}>Hello, I am Elijah! <span className={styles.hand}>✋</span></span>
					<p className={styles.desc}>I am a Ph.D. student at Michigan Technological University studying Computer Science. I research robotics in lunar applications for NASA and sensor systems for the US Navy. I have experience in industry as a full-stack software engineer.</p>
					<p className={styles.desc}>Reach out to me at <a rel="noreferrer" target={"_blank"} href={"mailto:ejcobb@mtu.edu"}>ejcobb@mtu.edu</a> or <a rel="noreferrer" target={"_blank"} href={"https://twitter.com/elijahjcobb"}>@elijahjcobb</a>!</p>
				</div>
			</div>
			<div className={styles.updates}>
				<h2>Updates</h2>
				{props.updates.map((v, i) => {
					return <UpdateRow key={i} {...v}/>
				})}
				<a className={styles.more} href={"/updates"}>See more...</a>
			</div>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
	return {props: {updates: await fetchUpdates(3)}}
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
