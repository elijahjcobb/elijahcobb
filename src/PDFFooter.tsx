/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";

export interface PDFFooterProps {

}

export interface PDFFooterState {

}

export class PDFFooter extends React.Component<PDFFooterProps, PDFFooterState> {

	public constructor(props: PDFFooterProps) {

		super(props);

		this.state = {};

	}

	public render(): React.ReactElement {
		return (<div className={"PDFFooter"}>
			<span>This document is a print render of my portfolio website. For more info please visit <a href={"https://elijahcobb.com"}>elijahcobb.com</a>.</span>
		</div>);
	}

}