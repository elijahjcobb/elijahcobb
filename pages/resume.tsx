/*
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 */

import type {NextPage, GetStaticProps, GetStaticPaths, GetServerSideProps} from "next";

interface PageProps {

}

const Page: NextPage<PageProps> = () => {
	return (
		<span>Hello, Page!</span>
	);
};

// export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
// 	return {
// 		props: {}
// 	}
// }

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
	return {
		redirect: {
			permanent: true,
			destination: "/Elijah-Cobb-Resume.pdf"
		}
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	return {
// 		paths: [],
// 		fallback: false
// 	};
// }

export default Page;
