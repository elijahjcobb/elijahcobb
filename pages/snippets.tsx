import type { GetStaticProps } from "next"
import { SnippetsProps, Snippets } from "../components/snippets"
import { fetchGists } from "../data/github"

export default Snippets;

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
	const gists = await fetchGists();
	return {
		props: {
			gists
		},
		revalidate: 10
	}
}