/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface LanguagesViewProps {

}

export interface LanguagesViewState {

}

export class LanguagesView extends React.Component<LanguagesViewProps, LanguagesViewState> {

	public constructor(props: LanguagesViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="skills">
			<h2>languages</h2>
			<ul>
				<li>TypeScript/JavaScript</li>
				<li>Swift</li>
				<li>Java</li>
				<li>C/C++</li>
				<li>Objective-C</li>
				<li>Python</li>
				<li>C#</li>
				<li>HTML & CSS</li>
			</ul>
		</div>);
	}

}