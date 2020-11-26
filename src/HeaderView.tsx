/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Mail, GitHub, Twitter, Reddit, LinkedIn} from "@material-ui/icons";

export interface HeaderViewProps {

}

export interface HeaderViewState {

}

export class HeaderView extends React.Component<HeaderViewProps, HeaderViewState> {

	public constructor(props: HeaderViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<header>
			<div className="about">
				<h1>Elijah Cobb</h1>
				<img className="profile" src="./profile.jpeg" alt="elijah profile"/>
				<a className={"header-url"} href={"https://elijahcobb.com"}>elijahcobb.com</a>
				<div className="contacts">
					<a rel={"noopener noreferrer"} className="contact" href="mailto:elijah@elijahcobb.com">
						<Mail/>
						{/*<span style={{marginLeft: "4px"}}>elijah@elijahcobb.com</span>*/}
					</a>
					<a rel={"noopener noreferrer"} className="contact" href="https://www.linkedin.com/in/elijahjcobb" target="_blank">
						<LinkedIn/>
					</a>
					<a rel={"noopener noreferrer"} className="contact" href="https://github.com/elijahjcobb" target="_blank">
						<GitHub/>
					</a>
					<a rel={"noopener noreferrer"} className="contact" href="https://twitter.com/elijahjcobb" target="_blank">
						<Twitter/>
					</a>
					{/*<a rel={"noopener noreferrer"} className="contact" href="https://www.reddit.com/user/elijahcobb" target="_blank">*/}
					{/*	<Reddit/>*/}
					{/*</a>*/}
				</div>
			</div>
		</header>);
	}

}
