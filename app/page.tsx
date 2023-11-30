import styles from "./index.module.css";
import Image from "next/image";
import profilePicture from "#/public/profile.png";
import { Globe } from "./guests/globe";
import { getMarkers } from "./guests/markers";
import Link from "next/link";

export const revalidate = 10;

export default async function HomePage(): Promise<JSX.Element> {
	const markers = await getMarkers();
	return <div className={styles.container}>
		<div className={styles.header}>
			<Image alt="elijah sketch" className={styles.headShot} height={480} src={profilePicture} width={480} />
			<div className={styles.text}>
				<span className={styles.head}>Hello, my name is</span>
				<h1 className={styles.name}>Elijah Cobb</h1>
				<span className={styles.subheader}>I am a Software Engineer in<br />San Diego, CA.</span>
			</div>
			<Link aria-label="view all guests on a globe" href='/guests' className={styles.globe}>
				<Globe markers={markers} />
			</Link>
		</div>
	</div>
}
