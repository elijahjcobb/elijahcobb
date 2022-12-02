import { CookiesProvider } from "react-cookie";

export function IncludeAllProviders(props: { children?: React.ReactNode }) {
	return <CookiesProvider>
		{props.children}
	</CookiesProvider>
}