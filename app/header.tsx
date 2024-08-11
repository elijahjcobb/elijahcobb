import Image from "next/image"
import image from "#/public/profile.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Link from "next/link";
import styles from "./header.module.css";

function ExternalIconLink({ href, icon: Icon }: { href: string, icon: IconType }): JSX.Element {
	return <Link className={styles.social} href={href} target="_blank">
		<Icon className={styles.socialIcon} />
	</Link>
}

export function Header() {
	return <header className={styles.header}>
		<div className={styles.bio}>
			<Image className={styles.headshot} src={image} width={72} alt="elijah headshot" />
			<h1 className={styles.name}>Elijah Cobb</h1>
			<p className={styles.title}>Software Engineer</p>
		</div>
		<div className={styles.socials}>
			<ExternalIconLink icon={FaLinkedin} href="http://linkedin.com/in/elijahjcobb" />
			<ExternalIconLink icon={FaGithub} href="https://github.com/elijahjcobb" />
			<ExternalIconLink icon={FaEnvelope} href="mailto:elijah@elijahcobb.com" />
		</div>
	</header>
}