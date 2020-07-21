/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Experience} from "./types";
import {LinkView} from "./LinkView";

export interface ExperienceViewProps {
	value: Experience;
}

export interface ExperienceViewState {

}

export class ExperienceView extends React.Component<ExperienceViewProps, ExperienceViewState> {

	public constructor(props: ExperienceViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="business">
			<div className="header">
				{this.props.value.url ? (
					<LinkView url={this.props.value.url}/>
				) : <div/>}
				<div className="info">
					<span className="name">{this.props.value.title}</span>
					{this.props.value.subtitle ? (
						<span className="subname">{this.props.value.subtitle}</span>
					): <div/>}
					<span className="location">{this.props.value.location}</span>
				</div>
			</div>
			{
				this.props.value.positions.map((position, index) => {
					return (<div className="position" key={index}>
						<span className="title">{position.title}</span>
						<span className="date">{position.start + " - " + position.end}</span>
						<p className="description">{position.description}</p>
					</div>)
				})
			}
		</div>);
	}

}