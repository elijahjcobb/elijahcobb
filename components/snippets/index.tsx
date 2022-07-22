import type { Gist } from "../../data/types"
import styles from "./index.module.css";
import { Snippet } from "./snippet";

export interface SnippetsProps {
	gists: Gist[];
}

export function Snippets({ gists }: SnippetsProps) {
	return <ul className={styles.list}>
		{gists.map((gist, i) => <>
			<Snippet gist={gist} key={gist.id} />
			{i !== gists.length - 1 && <div className={styles.bar} key={gist.id + "divider"} />}
		</>)}
	</ul>
}