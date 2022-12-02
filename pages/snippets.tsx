import type { GetStaticProps } from "next"
import type { SnippetsProps } from "../components/snippets";
import { Snippets } from "../components/snippets"
import { REVALIDATE_DEFAULT } from "../data/links";
import { fetchGists } from "../data/github"

export default Snippets;

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
	const gists = await fetchGists();
	return {
		props: {
			gists
		},
		revalidate: REVALIDATE_DEFAULT
	}
}