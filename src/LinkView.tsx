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

export function LinkView(props: LinkViewProps): React.ReactElement {
	return (<a href={props.url} className={"link"} rel={"noreferrer noopener"} target="_blank"><Link/></a>);
}
