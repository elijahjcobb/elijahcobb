/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps} from "next";
import styles from "../styles/home.module.scss";
import {fetchUpdates, Update} from "../components/update-loader";
import {Mountain} from "../components/Mountain";
import {Typr} from "../components/Typr";


interface PageProps {

}

const Page: NextPage<PageProps> = props => {

	return (
		<div className={styles.main}>
			<Mountain className={styles.mtn}/>
			<div className={styles.header}>
				<img className={styles.profile} alt={"elijah"} src={"/profile-cas-clear.png"}/>
				<div className={styles.text}>
					<Typr className={styles.title} content={[
						"Hello!",
						1000,
						"Hello",
						200,
						"Hello, I am Elijah!"
					]}/>
					<Typr className={styles.desc} cursor={true} content={[
						3000,
						"I am a Full Stack Engineer at ▲ Vercel. Before that, I worked as a graduate researcher at HuskyWorks",
						600,
						"I am a Full Stack Engineer at ▲ Vercel. Before that, I worked as a graduate researcher at the Planetary Surface Technology Development Lab (PSTDL)",
						"I am a Full Stack Engineer at ▲ Vercel. Before that, I worked as a graduate researcher at the Planetary Surface Technology Development Lab (PSTDL), where I did R&D work on Lunar robotics for NASA.",
						1000,
						"I am a Full Stack Engineer at ▲ Vercel. Before that, I worked as a graduate researcher at the Planetary Surface Technology Development Lab (PSTDL), where I did R&D work on Lunar robotics for NASA." + "In my free time I enjoy playing Hockey, Skiing, Rock Climbing, and Hiking!"
					]}/>
					<p className={styles.desc}>Reach out to me at <a rel="noreferrer" target={"_blank"} href={"mailto:elijah@elijahcobb.com"}>elijah@elijahcobb.com</a> or <a rel="noreferrer" target={"_blank"} href={"https://twitter.com/elijahjcobb"}>@elijahjcobb</a>!</p>
				</div>
			</div>
		</div>
	);
};

// export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
// 	return {props: {updates: await fetchUpdates(3)}}
// }

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
