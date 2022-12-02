import { Positions } from "../work";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import profilePicture from "../../public/profile.jpg";
import { GuestBook } from "../guest-book";
import type { PositionType } from "../../data/types";

export function HomePage({ positions }: { positions: PositionType[] }) {
	return <div className={styles.container}>
		<div className={styles.header}>
			<Image alt="elijah sketch" height={480} src={profilePicture} width={480} />
			<div className={styles.text}>
				<span className={styles.head}>Hello, my name is</span>
				<h1 className={styles.name}>Elijah Cobb</h1>
				<span className={styles.subheader}>I am a Full Stack Engineer in Seattle, WA.</span>
				<Link href="/#guestbook" passHref>
					<a className={styles.down}>
						<FaArrowDown color='var(--secondary)' size={32} />
					</a>
				</Link>
			</div>
		</div>
		<GuestBook />
		<Positions positions={positions} />
	</div>
}