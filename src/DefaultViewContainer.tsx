/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {research} from "./data/research";
import {ResearchProjectView} from "./ResearchProjectView";
import {DefaultViewRow} from "./DefaultViewRow";
import {DefaultItem} from "./types";

export interface DefaultViewContainerProps {
	header: string;
	values: DefaultItem[];
}

export function DefaultViewContainer(props: PropsWithChildren<DefaultViewContainerProps>): ReactElement {

	return (<section className="projects">
		<h2>{props.header}</h2>
		{
			props.values.map((item, index) => {
				return (<DefaultViewRow value={item} key={index}/>);
			})
		}
	</section>);

}
