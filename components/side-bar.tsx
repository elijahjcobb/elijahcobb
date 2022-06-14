import cn from "classnames";

export function SideBar({ children, className }: { className?: string, children?: React.ReactNode }) {
	return <div className={cn("container", className)}>
		<style jsx>{`
			.container {
				height: calc(100vh - var(--nav-height));
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;
				gap: var(--padding);
				padding: var(--padding);
				width: var(--nav-height);
				overflow: hidden;
				left: 0;
				top: var(--nav-height);
				position: sticky;
				background: var(--background);
			}
		`}</style>
		{children}
	</div>
}