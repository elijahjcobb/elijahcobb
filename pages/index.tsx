import type { GetStaticProps } from "next";
import { HomePage } from "../components/home";
import { REVALIDATE_DEFAULT } from "../data/links";
import { MapDataProvider, type MapPin } from "../data/map-data";
import { fetchPins } from "../data/redis";
import { fetchPositions } from "../data/static/positions";
import type { PositionType } from "../data/types";

interface PageProps {
	pins: MapPin[];
	positions: PositionType[];
}

export default function Page(props: PageProps) {
	return <MapDataProvider value={props.pins}>
		<HomePage positions={props.positions} />
	</MapDataProvider>
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const pins = await fetchPins();
	return {
		props: {
			pins,
			positions: fetchPositions()
		},
		revalidate: REVALIDATE_DEFAULT
	}
}