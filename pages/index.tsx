/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";
import styles from "../styles/home.module.scss";

interface PageProps {

}

const Page: NextPage<PageProps> = () => {
	return (
		<div className={styles.header}>
			<img className={styles.profile} alt={"elijah"} src={"/profile.jpg"}/>
			<div className={styles.text}>
				<span className={styles.title}>Hello, I am Elijah! <span className={styles.hand}>✋</span></span>
				<p className={styles.desc}>I am a Ph.D. student at Michigan Technological University studying Computer Science. I research robotics in lunar applications for NASA and sensor systems for the US Navy. I have experience in industry as a full-stack software engineer.</p>
				<p className={styles.desc}>Reach out to me at <a rel="noreferrer" target={"_blank"} href={"https://twitter.com/elijahjcobb"}>@elijahjcobb</a>!</p>
			</div>
		</div>
	);
};

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
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
