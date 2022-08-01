import type { GetStaticProps } from "next";
import type { ShipsProps } from "../components/ships";
import { Ships } from "../components/ships";
import { fetchShips } from "../data/github"


export default function Page(props: ShipsProps) {
	return <Ships ships={props.ships} />
}

export const getStaticProps: GetStaticProps<ShipsProps> = async () => {
	const ships = await fetchShips();
	return {
		props: {
			ships
		}
	}
}