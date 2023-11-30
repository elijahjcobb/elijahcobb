
import { Snippet } from "#/app/snippets/snippet";
import { fetchGists } from "#/data/github"
import styles from "./index.module.css";

export const revalidate = 60;

export default async function Snippets(): Promise<JSX.Element> {

	const gists = await fetchGists();

	return <ul className={styles.list}>
		{gists.map((gist, i) => <div key={gist.id}>
			<Snippet gist={gist} />
			{i !== gists.length - 1 && <div className={styles.bar} />}
		</div>)}
	</ul>
}