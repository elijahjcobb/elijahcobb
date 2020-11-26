/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {projects} from "./data/projects";
import {ProjectView} from "./ProjectView";
export interface ProjectsViewProps {

}

export interface ProjectsViewState {

}

export class ProjectsView extends React.Component<ProjectsViewProps, ProjectsViewState> {

	public constructor(props: ProjectsViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<section className="projects">
			<h2>Projects</h2>
			{
				projects.map((project, index) => {
					return (<ProjectView value={project} key={index}/>);
				})
			}
		</section>);
	}

}
