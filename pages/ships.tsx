import type { GetStaticProps } from "next";
import type { ShipsProps } from "../components/ships";
import { Ships } from "../components/ships";
import { REVALIDATE_DEFAULT } from "../data";
import { fetchShips } from "../data/github"

export default Ships;

export const getStaticProps: GetStaticProps<ShipsProps> = async () => {
	const ships = await fetchShips();
	return {
		props: {
			ships
		},
		revalidate: REVALIDATE_DEFAULT
	}
}