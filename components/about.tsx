import Image from "next/image";
import { ExternalLink } from "./link";
import profile from "/public/profile.jpg";

export function About() {
	return <div id='about' className='container'>
		<style jsx global>{`
			.profile {
				border-radius: 50%;
			}
		`}</style>
		<style jsx>{`
			.text, .about {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: var(--padding);
			}
			.text {
				text-align: justify;
				max-width: 480px;
			}
			.text p {
				line-height: 1.5;
				font-size: 1.0625em;
			}
			@media (min-width: 800px) {
				.container {
				}
				.about {
					flex-direction: row;
					align-items: flex-start;
					margin-top: var(--padding-xl);
				}
				.text, .about {
					gap: var(--padding-l);
				}
			}
		`}</style>
		<h1>About</h1>
		<div className="about">
			<Image src={profile} width={180} height={180} className='profile' alt='elijah' />
			<div className="text">
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
			</div>
		</div>
	</div>
}