import { Gist } from "../../data/types";
import styles from "./index.module.css";
import cn from "clsx";
import { FaCalendar, FaCode, FaFile } from "react-icons/fa";

export function SnippetStats({ gist, className }: { gist: Gist, className?: string }) {
	return <div className={cn(styles.rowBottom, className)}>
		{gist.files.length > 0 && <div className={styles.minimal}>
			<FaCode />
			<span>{gist.files.map(file => file.language).join(", ")}</span>
		</div>}
		<div className={styles.minimal}>
			<FaFile />
			<span>{gist.files.length}</span>
		</div>
		<div>
			<FaCalendar />
			<span>{gist.createdAt}</span>
		</div>
	</div>
}