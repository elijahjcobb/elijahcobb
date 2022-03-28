/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import { FC } from "react";
import { ProjectRow, ProjectRowProps } from "./ProjectRow";
import { COLOR_blue5 } from "./colors";
import {IProject} from "../data/projects";

export interface ProjectsTableProps {
	projects: IProject[];
}

export const ProjectsTable: FC<ProjectsTableProps> = props => {

	return <>
		<style jsx>{`
			//* { border: solid 1px red; }
			.container {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				margin: 64px 0;
			}
			.title {
				color: ${COLOR_blue5};
				font-size: 2em;
			}
			.subtitle {
				margin: 16px 0;
				line-height: 1.5;
				font-size: 18px;
			}
			.body {
				max-width: 720px;
			}
			.projects {
				margin-top: 32px;
				display: grid;
				grid-template-columns: 100%;
				grid-template-rows: auto;
				grid-gap: 32px;
				align-items: start;
			}
			@media (min-width: 780px) {
				.projects {
					grid-template-columns: repeat(2, 50%);
				}
			}
		`}</style>
		<div className={"container"}>
			<div className={"body"}>
				<h2 className={"title"}>projects</h2>
				<p className={"subtitle"}>Programming is not only my job, it is one of my many hobbies. The projects
					below are a combination of personal projects 👨‍💻, and professional projects 💼. Click on a project to
					view more info. Some links might take you to the project, or to the GitHub.</p>
				<div className={"projects"}>
					{props.projects.map((p, i) => <ProjectRow project={p} key={i} />)}
				</div>
			</div>
		</div>
	</>;

};