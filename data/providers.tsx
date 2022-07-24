import { SpotifyProvider } from "./hooks";

export function IncludeAllProviders(props: { children?: React.ReactNode }) {
	return <SpotifyProvider>
		{props.children}
	</SpotifyProvider>
}