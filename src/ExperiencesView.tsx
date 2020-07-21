/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {experiences} from "./data/experiences";
import {ExperienceView} from "./ExperienceView";

export interface ExperiencesViewProps {

}

export interface ExperiencesViewState {

}

export class ExperiencesView extends React.Component<ExperiencesViewProps, ExperiencesViewState> {

	public constructor(props: ExperiencesViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="experiences">
			<h2 className="experienceLabel">experience</h2>
			{experiences.map((experience, index) => {
				return (<ExperienceView value={experience} key={index}/>)
			})}
		</div>);
	}

}