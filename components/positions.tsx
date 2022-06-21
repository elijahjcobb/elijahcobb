import Link from "next/link";
import { useEffect, useState } from "react";
import { FadeInContainer } from "./fade-in-container";

type Position = {
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
		tasks: []
	},
	{
		name: "Planetary Surface Technology Development Lab",
		shortName: "PSTDL",
		href: "https://pstdl.com/",
		startDate: "May 2020",
		endDate: "Apr 2022",
		position: "Graduate Researcher",
		tasks: []
	},
	{
		name: "College of Computing",
		shortName: "CoC",
		href: "https://mtu.edu/computing",
		startDate: "Nov 2020",
		endDate: "Apr 2022",
		position: "Doctoral Researcher",
		tasks: []
	},
	{
		name: "Ampel Feedback",
		shortName: "Ampel",
		href: "https://github.com/ampelfeedback",
		startDate: "Dec 2017",
		endDate: "Feb 2020",
		position: "Software Engineer",
		tasks: []
	},
	{
		name: "Solution Studio",
		shortName: "SS",
		href: "https://solutionstud.io",
		startDate: "Aug 2017",
		endDate: "Dec 2017",
		position: "Software Engineer",
		tasks: []
	},
];

export function Position({ position }: { position: Position }) {
	return <div className="container">
		<style jsx>{`
			.container {
				display: flex;
				flex-direction: column;
				gap: var(--padding-s);
				margin-top: var(--padding);
				font-size: var(--font-size);
				justify-content: flex-start;
				align-items: flex-start;
			}
			.text {
				font-size: 1.25em;
				text-align: left;
			}
			.date {
				font-size: 1.125em;
				font-weight: lighter;
			}
			.positions {
				display: flex;
				flex-direction: column;
				gap: var(--padding-xs);
			}
			.position {
				margin-left: var(--padding);
			}
		`}</style>
		<p className="text">
			{position.position}
			<Link href={position.href} passHref>
				<a className="org" rel='noreferrer noopener' target='_blank'>{' @ ' + position.name}</a>
			</Link>
		</p>
		<p className="date">{position.startDate + " - " + position.endDate}</p>
		<ul className="positions">
			{position.tasks.map(task => <li className="position" key={task}>{task}</li>)}
		</ul>
	</div>
}

export function Positions() {
	const [selected, setSelected] = useState(0);
	return <div className='container' id='work'>
		<style jsx>{`
			.container {
				width: 100%;
				display: flex;
				flex-direction: column;
				gap: var(--padding);
			}
			.positions {
				width: 100%;
				display: flex;
				align-items: center;
				overflow-x: auto;
			}
			.position {
				background: none;
				outline: none;
				border: none;
				border-bottom: solid 2px var(--accent-4);
				color: var(--accent-4);
				font-family: var(--font-mono);
				padding: var(--padding);
				transition: 250ms ease-in-out;
				font-size: var(--size);
			}
			.position:hover, .active {
				color: var(--primary);
			}
			.position:hover {
				cursor: pointer;
			}
			.active {
				border-bottom-color: var(--primary);
			}
			@media (min-width: 480px) {
				.card {
					display: flex;
					gap: var(--padding);
				}
				.positions {
					flex-direction: column;
					width: 120px;
					min-width: 120px;
				}
				.position {
					width: 100%;
					border-bottom: none;
					border-right: solid 4px var(--accent-4);
					text-align: right;
				}
				.active {
					border-right-color: var(--primary);
				}
			}
			@media (min-width: 800px) {
				.container {
					height: calc(100vh - var(--nav-height));
				}
			}
		`}</style>
		<h1>Work</h1>
		<div className="card">
			<div className="positions">
				{POSITIONS.map((position, i) => {
					return <button className={"position" + (selected === i ? " active" : "")} key={i} onClick={() => setSelected(i)}>{position.shortName ?? position.name}</button>
				})}
			</div>
			<Position position={POSITIONS[selected] as Position} />
		</div>
	</div>
}
