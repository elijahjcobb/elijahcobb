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
import GitHubIcon from '@mui/icons-material/GitHub';

export const NavBar: FC = () => {

	return (<div className={styles.container}>
		<div className={styles.links}>
			<Link href={"/"}>
				<img className={styles.profile} alt={"profile"} src={"/bitmoji.png"}/>
			</Link>
			<Link href={"/"}>Home</Link>
			<Link href={"/updates"}>Updates</Link>
			<Link href={"/publications"}>Publications</Link>
			<a target={"_blank"} href={"/resume.pdf"}>Resume</a>
		</div>
		<div className={styles.logos}>
			<a className={styles.twitter} target={"_blank"} href={"https://twitter.com/elijahjcobb"}><TwitterIcon/></a>
			<a className={styles.linkedin} target={"_blank"} href={"https://www.linkedin.com/in/elijahjcobb/"}><LinkedInIcon/></a>
			<a className={styles.github} target={"_blank"} href={"https://github.com/elijahjcobb/"}><GitHubIcon/></a>
		</div>
	</div>);

};