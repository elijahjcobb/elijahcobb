/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Link} from "@material-ui/icons";

export interface LinkViewProps {
	url: string;
}

export interface LinkViewState {

}

export class LinkView extends React.Component<LinkViewProps, LinkViewState> {

	public constructor(props: LinkViewProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<a href={this.props.url} className={"link"} rel={"noreferrer noopener"} target="_blank"><Link/></a>);
	}

}