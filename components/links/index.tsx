import { useMemo } from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";


export function PositionLinks({ links }: { links: string[] }) {
	return <div className={styles.links}>
		{links.map(link => (
			<PositionLink key={link} link={link} />
		))}
	</div>
}
function PositionLink({ link }: { link: string }): JSX.Element {

	const name = useMemo(() => {
		const url = new URL(link)
		return url.hostname.replace("www.", "")
	}, [link]);

	return <Link href={link} target="_blank" className={styles.link}>
		{name}
		<div className={styles.iconContainer}>
			<LuExternalLink className={styles.icon} />
		</div>
	</Link>
}