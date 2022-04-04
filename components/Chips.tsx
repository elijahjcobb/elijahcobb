/*
 * Elijah Cobb
 * github.com/elijahjcobb
 * ejcobb@mtu.edu
 */

import { FC } from "react";
import { COLOR_blue1 } from "./colors";

export interface ChipsProps {
	chips: string[];
}

export const Chips: FC<ChipsProps> = props => {

	return (<>
		<style jsx>{`
			.container:hover .bottom .type {
			background: ${COLOR_blue1};
		}

		.chipsContainer {
			display: flex;
			flex-wrap: wrap;
			flex-grow: 1;
		}

		.chip {
			margin-top: 16px;
			margin-right: 16px;
			background: #222;
			padding: 4px;
			font-family: 'Roboto Mono', monospace;
			font-size: 14px;
			border-radius: 4px;
			transition: all 250ms ease-in-out;
		}
		.container:hover .chip {
			background: ${COLOR_blue1};
		}
	`}</style>
		<div className={"chipsContainer"}>
			{props.chips.map((chip, i) => <span className={"chip"} key={i}>{chip}</span>)}
		</div>
	</>);

};