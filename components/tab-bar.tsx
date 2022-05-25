import type { ReactElement } from "react";

export interface TabBarProps {

}

export function TabBar({ }: TabBarProps): ReactElement {
	return <div className="tabBar">
		<style jsx>{`
			.tabBar {
				background-color: var(--ec-dark);
				width: calc(100vw - var(--side-bar-width));
				height: var(--tab-bar-height);
				color: var(--ec-foreground);
			}
		`}</style>
		oi
	</div>
}