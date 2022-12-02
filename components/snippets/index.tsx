import type { Gist } from "../../data/types"
import styles from "./index.module.css";
import { Snippet } from "./snippet";

export interface SnippetsProps {
	gists: Gist[];
}

export function Snippets({ gists }: SnippetsProps) {
	return <ul className={styles.list}>
		{gists.map((gist, i) => <div key={gist.id}>
			<Snippet gist={gist} />
			{i !== gists.length - 1 && <div className={styles.bar} />}
		</div>)}
	</ul>
}