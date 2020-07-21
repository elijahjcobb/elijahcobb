/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Project} from "./types";
import {LinkView} from "./LinkView";

export interface ProjectViewProps {
	value: Project
}

export interface ProjectViewState {

}

export class ProjectView extends React.Component<ProjectViewProps, ProjectViewState> {

	public constructor(props: ProjectViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="project">
			<div className="header">
				<LinkView url={this.props.value.url}/>
				<span className="name">{this.props.value.title}</span>
			</div>
			{this.props.value.description ? <p className={"description"}>{this.props.value.description}</p> : <div/>}
		</div>);
	}

}