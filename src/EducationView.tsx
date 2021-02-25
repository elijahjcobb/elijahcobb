/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {Education} from "./types";

export interface EducationViewProps {
	value: Education;
}

export function EducationView(props: PropsWithChildren<EducationViewProps>): ReactElement {

	return (<div className="college">
		<img className="logo" src={props.value.img} alt="logo"/>
		<div className="info">
			<span className="name">{props.value.college}</span>
			{
				props.value.degrees.map((degree, index) => {
					return (<div className="degree" key={index}>
						<span className="title">{[degree.level, degree.major, degree.gpa].filter((value) => { return value !== undefined}).join(", ")}</span>
						<span className="date">{degree.start + " - " + degree.end}</span>
					</div>)
				})
			}
		</div>
	</div>);
}
