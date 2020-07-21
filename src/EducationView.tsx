/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Education} from "./types";

export interface EducationViewProps {
	value: Education;
}

export interface EducationViewState {

}

export class EducationView extends React.Component<EducationViewProps, EducationViewState> {

	public constructor(props: EducationViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="college">
			<img className="logo" src={this.props.value.img} alt="logo"/>
			<div className="info">
				<span className="name">{this.props.value.college}</span>
				{
					this.props.value.degrees.map((degree, index) => {
						return (<div className="degree" key={index}>
							<span className="title">{[degree.level, degree.major, degree.gpa].filter((value) => { return value !== undefined}).join(", ")}</span>
							<span className="date">{degree.start + " - " + degree.end}</span>
						</div>)
					})
				}
			</div>
		</div>);
	}

}