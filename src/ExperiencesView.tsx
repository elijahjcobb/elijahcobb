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
		return (<section className="experiences">
			<h2 className="experienceLabel">experience</h2>
			<div className={"businesses"}>
				{experiences.map((experience, index) => {
					return (<ExperienceView value={experience} key={index}/>)
				})}
			</div>
		</section>);
	}

}
