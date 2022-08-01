import type { GetStaticProps } from "next";
import { HomePage } from "../components/home";
import { fetchPositions } from "../data/contentful";
import { PositionsProvider } from "../data/contentful-hooks";
import { MapDataProvider, type MapPin } from "../data/map-data";
import { fetchPins } from "../data/redis";
import type { PositionType } from "../data/types";

interface PageProps {
	pins: MapPin[];
	positions: PositionType[];
}

export default function Page(props: PageProps) {
	return <MapDataProvider value={props.pins}>
		<PositionsProvider positions={props.positions}>
			<HomePage />
		</PositionsProvider>
	</MapDataProvider>
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const pins = await fetchPins();
	const positions = await fetchPositions();
	return {
		props: {
			pins,
			positions
		},
		revalidate: 3
	}
}