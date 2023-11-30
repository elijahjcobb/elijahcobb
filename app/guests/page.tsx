import { Globe } from "./globe";
import { getMarkers } from "./markers";

export const revalidate = 10;

export default async function Page(): Promise<JSX.Element> {
	const markers = await getMarkers();
	return <Globe markers={markers} />
}