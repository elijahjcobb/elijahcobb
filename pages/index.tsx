/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps} from "next";
import styles from "../styles/home.module.scss";
import {fetchUpdates, Update} from "../components/update-loader";
import {UpdateRow} from "../components/UpdateRow";

interface PageProps {
	updates: Update[];
}

const Page: NextPage<PageProps> = props => {
	return (
		<div className={styles.main}>
			<img src={"/mountains.svg"} className={styles.mtn}/>
			<div className={styles.header}>
				<img className={styles.profile} alt={"elijah"} src={"/profile.jpg"}/>
				<div className={styles.text}>
					<span className={styles.title}>Hello, I am Elijah! <span className={styles.hand}>✋</span></span>
					<p className={styles.desc}>{"I am a Full Stack Engineer at Vercel. Before that, I worked as a graduate researcher at HuskyWorks, where I did R&D work on robotics for Lunar ISRU on grants with NASA."}</p>
					<p className={styles.desc}>{"I enjoy working on hobby projects like "}<a href={"https://dotmd.app"} target={"_blank"} rel={"noreferrer"}>dotmd</a>{". In my free time I enjoy playing Hockey, Skiing, Rock Climbing, and Hiking!"}</p>
					<p className={styles.desc}>Reach out to me at <a rel="noreferrer" target={"_blank"} href={"mailto:elijah@elijahcobb.com"}>elijah@elijahcobb.com</a> or <a rel="noreferrer" target={"_blank"} href={"https://twitter.com/elijahjcobb"}>@elijahjcobb</a>!</p>
				</div>
			</div>
			<div className={styles.updates}>
				<h2>Updates</h2>
				{props.updates.map((v, i) => {
					return <UpdateRow key={i} {...v}/>
				})}
				<a className={styles.more} href={"/blog"}>View all updates...</a>
			</div>
		</div>
	);
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
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
