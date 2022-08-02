import type { GetStaticProps } from "next";
import type { UnsplashProps } from "../components/unsplash";
import { UnsplashPage } from "../components/unsplash";
import { fetchUnsplash } from "../data/unsplash";

export default UnsplashPage;

export const getStaticProps: GetStaticProps<UnsplashProps> = async () => {
	const images = await fetchUnsplash();
	return {
		props: { images },
		revalidate: 30
	}
}