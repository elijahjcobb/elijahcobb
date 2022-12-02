import type { GetStaticProps } from "next";
import type { ShipPageProps } from "../components/ships";
import { Ships } from "../components/ships";
import { fetchShips } from "../data/static/ships";

export default Ships;

export const getStaticProps: GetStaticProps<ShipPageProps> = () => {
	return {
		props: {
			ships: fetchShips()
		}
	}
}