/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import { FC } from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';

export const NavBar: FC = () => {

	return (<div className={styles.container}>
		<Link href={"/"}>
			<div className={styles.homeLink}>
				<img className={styles.profile} alt={"profile"} src={"/profile-cas-clear.png"} />
				<b>Elijah Cobb</b>
			</div>
		</Link>
		<div className={styles.links}>
		</div>
		<div className={styles.logos}>
			<a className={styles.mail} href={"/positions"}><WorkIcon /></a>
			<a rel="noreferrer" className={styles.mail} target={"_blank"} href={"mailto:elijah@elijahcobb.com"}><EmailIcon /></a>
			<a rel="noreferrer" className={styles.twitter} target={"_blank"} href={"https://twitter.com/elijahjcobb"}><TwitterIcon /></a>
			<a rel="noreferrer" className={styles.linkedin} target={"_blank"} href={"https://www.linkedin.com/in/elijahjcobb/"}><LinkedInIcon /></a>
			<a rel="noreferrer" className={styles.github} target={"_blank"} href={"https://github.com/elijahjcobb/"}><GitHubIcon /></a>
		</div>
	</div>);

};