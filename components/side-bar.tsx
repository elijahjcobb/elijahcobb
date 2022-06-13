export function SideBar({ children }: { children?: React.ReactNode }) {
	return <div className="container">
		<style jsx>{`
			.container {
				height: calc(100vh - var(--nav-height));
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-end;
				gap: var(--padding);
				padding: var(--padding);
			}
		`}</style>
		{children}
	</div>
}