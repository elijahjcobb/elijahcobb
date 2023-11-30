import { SideBar } from "../../side-bar";
import Link from "next/link";
import { VerticalLine } from "../../vertical-line";
import styles from "./index.module.css";

const EMAIL = "elijah@elijahcobb.com";

export function RightBar({ className }: { className?: string }): JSX.Element {
	return <SideBar className={className}>
		<Link className={styles.item} href={`mailto:${EMAIL}`} rel='noopener noreferrer' target='_blank'>
			<span className={styles.email}>{EMAIL}</span>
		</Link>
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}