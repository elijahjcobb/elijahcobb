/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import {FC} from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavBar: FC = () => {

	return (<div className={styles.container}>
		<div className={styles.links}>
			<Link href={"/"}>
				<img className={styles.profile} alt={"profile"} src={"/bitmoji.png"}/>
			</Link>
			<Link href={"/"}>home</Link>
			<Link href={"/updates"}>updates</Link>
			<Link href={"/papers"}>papers</Link>
			<a rel="noreferrer" target={"_blank"} href={"/Elijah-Cobb-Resume.pdf"}>resume</a>
		</div>
		<div className={styles.logos}>
			<a rel="noreferrer" className={styles.mail} target={"_blank"} href={"mailto:ejcobb@mtu.edu"}><EmailIcon/></a>
			<a rel="noreferrer" className={styles.twitter} target={"_blank"} href={"https://twitter.com/elijahjcobb"}><TwitterIcon/></a>
			<a rel="noreferrer" className={styles.linkedin} target={"_blank"} href={"https://www.linkedin.com/in/elijahjcobb/"}><LinkedInIcon/></a>
			<a rel="noreferrer" className={styles.github} target={"_blank"} href={"https://github.com/elijahjcobb/"}><GitHubIcon/></a>
		</div>
	</div>);

};