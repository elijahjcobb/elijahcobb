/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Skills} from "./types";

export interface SkillsViewProps {
	value: Skills
}

export interface SkillsViewState {

}

export class SkillsView extends React.Component<SkillsViewProps, SkillsViewState> {

	public constructor(props: SkillsViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<section className="skills">
			<h2>{this.props.value.title}</h2>
			<ul>
				{this.props.value.skills.map((skill, index) => {
					return (<li key={index}>{skill}</li>);
				})}
			</ul>
		</section>);
	}

}
