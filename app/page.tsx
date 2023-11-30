import styles from "./index.module.css";
import Image from "next/image";
import profilePicture from "#/public/profile.jpg";

export default function HomePage(): JSX.Element {
	return <div className={styles.container}>
		<div className={styles.header}>
			<Image alt="elijah sketch" className={styles.headShot} height={480} src={profilePicture} width={480} />
			<div className={styles.text}>
				<span className={styles.head}>Hello, my name is</span>
				<h1 className={styles.name}>Elijah Cobb</h1>
				<span className={styles.subheader}>I am a Software Engineer in<br />San Diego, CA.</span>
			</div>
		</div>
	</div>
}
