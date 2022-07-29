import type { GetStaticProps } from "next";
import { HomePage } from "../components/home";
import { MapDataProvider, type MapPin } from "../data/map-data";
import { redis } from "../data/redis";

interface PageProps { pins: MapPin[] }

export default function Page(props: PageProps) {
	return <MapDataProvider value={props.pins}>
		<HomePage />
	</MapDataProvider>
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
	const points = await redis.smembers("lat-lng");
	return {
		props: {
			pins: points.map(point => {
				const [lat, lng] = point.split(":");
				return { lat, lng } as unknown as MapPin;
			})
		},
		revalidate: 3
	}
}