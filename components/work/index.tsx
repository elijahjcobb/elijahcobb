import { useState } from "react";
import { Position } from "./position";
import styles from "./index.module.css";

export type Position = {
	shortName?: string;
	name: string;
	href: string;
	startDate: string;
	endDate: string;
	position: string;
	tasks: string[];
};
const POSITIONS: Position[] = [
	{
		name: "Vercel",
		href: "https://vercel.com/",
		startDate: "Apr 2022",
		endDate: "Present",
		position: "Fullstack Software Engineer",
		tasks: [
			"Working with the Growth team to iterate on previous products, build new features, and experiment with platform changes.",
			"Working on the entire stack from backend billing code, to styling frontend components.",
			"Developing landing pages on Vercel's homepage."
		]
	},
	{
		name: "Planetary Surface Technology Development Lab",
		shortName: "PSTDL",
		href: "https://pstdl.com/members/ejcobb",
		startDate: "May 2020",
		endDate: "Apr 2022",
		position: "Graduate Researcher",
		tasks: [
			"Created a component library for developing robotic systems.",
			"Developed ground control, communication, vision, and mobility software for the NASA award winning T-REX lunar rover prototype.",
			"System design and the development communication, and ground control software for the NASA LuSTR 2020 MTU testing bed, 'HOPLITE'.",
			"Developed an autonomous 3-axis gravity offloading system for the PSTDL's lunar simulant platform.",
			"System design on NASA Watts on the Moon.",
			"Conducted system testing of lunar rover prototypes.",
		]
	},
	{
		name: "College of Computing, MTU",
		shortName: "CoC",
		href: "https://mtu.edu/computing",
		startDate: "Nov 2020",
		endDate: "Apr 2022",
		position: "Doctoral Researcher",
		tasks: [
			"Development and validation of a language providing an interface between sensor data streams using Racket for research supported by the U.S.Navy through an SBIR(N20A - T010) with Applied Research in Acoustics Inc(ARiA).Work classified and no further information can be shared.",
			"Developed an IDE for undergraduate students to learn the Alloy programming language. The IDE (named shakudo), allow users to drag and drop discrete mathematics structures together using Google's Blockly and dynamically edits the Alloy source code to allow for responsive model simulation.",
			"Maintain a Web-App for a research project funded by the National Science Foundation analyzing the environmental impact. Design and implementation of a MySQL database linking all project data together.Design of a Web - App for researchers to access the database in a visual form."
		]
	},
	{
		name: "Ampel Feedback",
		shortName: "Ampel",
		href: "https://github.com/ampelfeedback",
		startDate: "Dec 2017",
		endDate: "Feb 2020",
		position: "Software Engineer",
		tasks: [
			"Designed and implemented open-source packages that were used in the backend infrastructure. Consisted of ORM database connectors, REST API generation, authentication, etc. Used packages to develop the entire backend.",
			"Developed an iOS application using a serverless backend that operated as kiosk collecting in the moment feedback from customers at a wide variety of businesses."
		]
	},
	{
		name: "Solution Studio",
		shortName: "SS",
		href: "https://solutionstud.io",
		startDate: "Aug 2017",
		endDate: "Dec 2017",
		position: "Software Engineer",
		tasks: [
			"Developed MVP for Ampel Feedback",
			"Developed interactive Facebook Messenger bots for businesses to use in marketing campaigns.",
			"AdWords Marketing",
			"AdWords A/B Tracking",
		]
	},
];

export function Positions() {
	const [selected, setSelected] = useState(0);
	return <div className={styles.container} id='work'>
		<h1>Work</h1>
		<div className={styles.card}>
			<div className={styles.positions}>
				{POSITIONS.map((position, i) => {
					return <button className={styles.position + (selected === i ? " " + styles.active : "")} key={i} onClick={() => setSelected(i)}>{position.shortName ?? position.name}</button>
				})}
			</div>
			<Position position={POSITIONS[selected] as Position} />
		</div>
	</div>
}
