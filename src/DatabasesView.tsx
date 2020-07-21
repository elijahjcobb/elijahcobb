/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface DatabasesViewProps {

}

export interface DatabasesViewState {

}

export class DatabasesView extends React.Component<DatabasesViewProps, DatabasesViewState> {

	public constructor(props: DatabasesViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className="skills">
			<h2>databases</h2>
			<ul>
				<li>MongoDB</li>
				<li>MySQL</li>
				<li>MariaDB</li>
			</ul>
		</div>);
	}

}