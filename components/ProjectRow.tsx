/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import { FC } from "react";
import { COLOR_blue1, COLOR_blue2, COLOR_orange, COLOR_purple } from "./colors";
import { IProject } from "../data/projects";
import { Chips } from "./Chips";

export enum ProjectType {
	HOBBY,
	PROFESSIONAL
}

export interface ProjectRowProps {
	project: IProject;
}

export const ProjectRow: FC<ProjectRowProps> = props => {

	const project = props.project;

	return (<>
		<style jsx>{`
		* {
			/* border: solid 1px red; */
		}

		.container {
			border-radius: 16px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 16px;
			min-width: 360px;
			max-width: 360px;
			box-shadow: 0 0 16px ${COLOR_blue2};
			transition: all 250ms ease-in-out;
			color: white;
			text-decoration: none;
			border: none;
		}
		
		.container:hover {
			background: linear-gradient(${COLOR_orange}, ${COLOR_purple});
			transform: scale(1.05);
			cursor: pointer;
			box-shadow: 0 0 16px ${COLOR_orange};
			text-decoration: none;
			border: none;
		}

		.img {
			width: 100%;
			max-height: 200px;
			object-fit: contain;
			margin-bottom: 32px;
			filter: grayscale(100%) blur(4px);
			transition: 250ms ease-in-out;
		}

		.container:hover .img {
			filter: none;
		}

		.titleRow {
			display: flex;
			width: 100%;
			justify-content: space-between;
			font-size: 18px;
		}

		.titleRow b {
			font-size: 24px;
		}

		.titleRow span {
			width: 120px;
		}

		.desc {
			margin-top: 16px;
		}

		.bottom {
			display: flex;
			width: 100%;
			justify-content: space-between;
			flex-wrap: none;
			align-items: flex-end;
		}

		.bottom .type {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			width: 32px;
			height: 32px;
			min-width: 32px;
			background: #222;
		}

		.container:hover .bottom .type {
			background: ${COLOR_blue1};
		}
		`}</style>
		<a href={"/projects/" + project.slug} className={"container"}>
			{project.img && <img alt={"preview"} className={"img"} src={project.img} />}
			<div className={"titleRow"}>
				<b>{project.title}</b>
				<span>{project.date[0]} - {project.date[1] ?? "present"}</span>
			</div>
			<p className={"desc"}>{project.description}</p>
			<div className="bottom">
				<Chips chips={props.project.chips} />
				<div className="type">{project.type === ProjectType.PROFESSIONAL ? "💼" : "👨‍💻"}</div>
			</div>
		</a>
	</>);

};