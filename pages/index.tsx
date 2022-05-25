import { Sidebar } from "../components/sidebar"
import { TabBar } from "../components/tab-bar"

// eslint-disable-next-line import/no-default-export
export default function Home() {
	return <div className="root">
		<style jsx>{`
			.root {
				display: flex;
			}
			.main {
				display: flex;
				flex-direction: column;
			}
		`}</style>
		<Sidebar />
		<div className="main">
			<TabBar />
			<span>hello, world!</span>
		</div>
	</div>
}