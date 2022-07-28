import { CookiesProvider } from "react-cookie";
import { SpotifyProvider } from "./hooks";

export function IncludeAllProviders(props: { children?: React.ReactNode }) {
	return <SpotifyProvider>
		<CookiesProvider>
			{props.children}
		</CookiesProvider>
	</SpotifyProvider>
}