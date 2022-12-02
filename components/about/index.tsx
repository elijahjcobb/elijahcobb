import { ExternalLink } from "../external-link";
import styles from "./index.module.css";

export function About() {
	return <div className={styles.container} id='about'>
		<h1>About</h1>
		<div className={styles.about}>
			<div className={styles.text}>
				<p>Hi! My name is Elijah Cobb. I am currently a Full Stack Engineer at <ExternalLink href="https://vercel.com/home">Vercel</ExternalLink>. My passion for Software Engineer started when I was 12. I loved making iOS Apps with Objective-C and UIKit.
					From there, I began web development and landed my <ExternalLink href="https://solutionstud.io">first job</ExternalLink> working for a startup after High School.</p>
				<p><ExternalLink href="https://github.com/ampelfeedback">Ampel Feedback</ExternalLink> was a startup founded in Traverse City providing businesses with a point-of-sale kiosk
					feedback system. Providing businesses <em>in-the-moment</em> feedback, Ampel was used at coffee shops,
					fitness studios, banks, etc. I developed the original iPad Application MVP and upon a pivot, I created the
					backend software using NodeJS, MongoDB, TypeScript, etc.</p>
				<p>After Ampel, I joined a robotics laboratory at my university called the Planetary
					Surface Technology Development Lab (PSTDL). The <ExternalLink href="https://pstdl.com">PSTDL</ExternalLink> does R&D for lunar ISRU robotics technologies. I developed
					control software and ground control applications to control our robotics using popular web technologies such as
					ReactJS, NextJS, TypeScript, etc.</p>
				<p>I started a Ph.D. and pretty quickly found that it was not the best path for me. Upon deciding to leave, I
					joined <ExternalLink href="https://vercel.com/home">Vercel</ExternalLink>. I am currently a Full Stack Engineer at Vercel on the Growth team and could not be happier. I
					moved across the country from <ExternalLink href="https://www.google.com/maps/place/Traverse+City,+MI">Northern Michigan</ExternalLink> to <ExternalLink href="https://www.google.com/maps/place/Seattle,+WA">Seattle, WA</ExternalLink>.
				</p>
				<p>In addition to work, I enjoy playing hockey, skiing, hiking, biking, and listening to music. I play music about 50% of every waking
					second of my day.
				</p>
			</div>
		</div>
	</div>
}