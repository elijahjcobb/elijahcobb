// import { OGLink } from "#/components/links";
import { Position } from "#/components/positions"
import { fetchPositions } from "#/data/positions"
import image from "#/public/profile.png";
import Link from "next/link";
import styles from "./page.module.css"
import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IconType } from "react-icons";

export const revalidate = 0;

function ExternalIconLink({ href, icon: Icon }: { href: string, icon: IconType }): JSX.Element {
	return <Link className={styles.social} href={href} target="_blank">
		<Icon className={styles.socialIcon} />
	</Link>
}

export default async function Page() {
	const positions = await fetchPositions()
	// const links = await fetchLinks();
	return <div className={styles.container}>
		<section>
			<header className={styles.header}>
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
		</section>
		<section className={styles.positions}>
			<h2>Positions</h2>
			{positions.map(pos => (
				<Position position={pos} key={pos.id} />
			))}
		</section>
		{/* <section className={styles.links}>
			<h2>Links</h2>
			<p>Some fun links I have found along the way...</p>
			{links.map(link => (
				<OGLink href={link.href} id={link.id} key={link.id} />
			))}
		</section> */}
	</div>
}