/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface FrameworksViewProps {

}

export interface FrameworksViewState {

}

export class FrameworksView extends React.Component<FrameworksViewProps, FrameworksViewState> {

	public constructor(props: FrameworksViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="skills">
			<h2>frameworks/runtimes</h2>
			<ul>
				<li>React</li>
				<li>MaterialUI</li>
				<li>Electron</li>
				<li>SCSS</li>
				<li>SwiftUI</li>
				<li>UIKit</li>
				<li>Flutter</li>
				<li>Bootstrap</li>
				<li>GraphQL</li>
				<li>Node.JS</li>
				<li>Deno</li>
			</ul>
		</div>);
	}

}