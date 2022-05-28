import type { ReactElement } from "react";
import { TabBarItem } from "./tab-bar-item";

export interface TabBarProps {

}

export function TabBar({ }: TabBarProps): ReactElement {
	return <div className="tabBar">
		<style jsx>{`
			.tabBar {
				background-color: var(--dark);
				width: calc(100vw - var(--side-bar-width));
				height: var(--tab-bar-height);
				color: var(--foreground);
				display: flex;
				position: fixed;
				left: var(--side-bar-width);
				top: 0;
				overflow-x: auto;
				border-bottom: solid 1px var(--dark);
			}
		`}</style>
		<TabBarItem name="index" link="/" />
		<TabBarItem name="blog" link="/blog" />
	</div>
}