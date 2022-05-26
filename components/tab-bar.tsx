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
			}
		`}</style>
		<TabBarItem name="index" link="/" />
		<TabBarItem name="blog" link="/blog" />
		<TabBarItem name="test" link="/test" />
	</div>
}