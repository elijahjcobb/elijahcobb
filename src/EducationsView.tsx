/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {educations} from "./data/educations";
import {EducationView} from "./EducationView";

export interface EducationsViewProps {

}

export interface EducationsViewState {

}

export class EducationsView extends React.Component<EducationsViewProps, EducationsViewState> {

	public constructor(props: EducationsViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="educations">
			<h2>education</h2>
			<div className={"colleges"}>
				{
					educations.map((education, index) => {
						return (<EducationView value={education} key={index}/>)
					})
				}
			</div>
		</div>);
	}

}