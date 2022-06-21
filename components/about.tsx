import Image from "next/image";
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
			@media (min-width: 800px) {
				.container {
					min-height: calc(100vh - var(--nav-height));
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
				<p>Hi! My name is Elijah Cobb. I am currently a Full Stack Engineer at Vercel.
					My passion for Software Engineer started when I was 12. I loved making iOS Apps with Objective-C and UIKit.
					From there, I began web development and landed my first job working for a startup after High School.</p>
				<p>Ampel Feedback was a startup founded in Traverse City providing businesses with a point-of-sale kiosk
					feedback system. Providing businesses <em>in-the-moment</em> feedback, Ampel was used at coffee shops,
					fitness studios, banks, etc. I developed the original iPad Application MVP and upon a pivot, I created the
					backend software using NodeJS, MongoDB, TypeScript, etc.</p>
				<p>After Ampel, I joined a robotics laboratory at my university called the Planetary
					Surface Technology Development Lab (PSTDL). The PSTDL does R&D for lunar ISRU robotics technologies. I developed
					control software and ground control applications to control our robotics using popular web technologies such as
					ReactJS, NextJS, TypeScript, etc.</p>
				<p>I started a Ph.D. and pretty quickly found that it was not the best path for me. I applied to several companies
					in industry and soon joined Vercel. I am currently a Full Stack Engineer at Vercel and could not be happier. I
					moved across the country from Northern Michigan to Seattle, WA.
				</p>
			</div>
		</div>
	</div>
}