import React, { type PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";
import { TabBar } from "./tab-bar";
import { Terminal } from "./terminal";

export interface ShellProps {
	className?: string;
}

export function Shell({
	children,
	className
}: PropsWithChildren<ShellProps>) {
	return <>
		<style jsx>{`
			.root, .container {
				display: flex;
			}
			.container {
				flex-direction: column;
			}
			.children {
				background: var(--background);
				width: calc(100vw - var(--side-bar-width));
				height: calc(70vh - var(--tab-bar-height));
				font-family: "Roboto Mono", monospace;
				padding: 0 4px;
				margin-top: var(--tab-bar-height);
				margin-left: var(--side-bar-width);
				overflow-y: auto;
			}
		`}</style>
		<div className="root">
			<Sidebar />
			<div className="container">
				<TabBar />
				<div className={`children ${className}`}>
					{children}
				</div>
				<Terminal />
			</div>
		</div>
	</>
}