import { SideBar } from "../../side-bar";
import Link from "next/link";
import { VerticalLine } from "../../vertical-line";
import styles from "./index.module.css";

const EMAIL = "elijah@elijahcobb.com";

export function RightBar({ className }: { className?: string }) {
	return <SideBar className={className}>
		<Link href={`mailto:${EMAIL}`} passHref >
			<a target='_blank' rel='noopener noreferrer' className={styles.item}>
				<span className={styles.email}>{EMAIL}</span>
			</a>
		</Link>
		<VerticalLine color='var(--foreground)' />
	</SideBar >
}