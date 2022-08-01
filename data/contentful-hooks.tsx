import { useContext, createContext } from "react";
import type { PropsWithChildren } from "react";
import type { PositionType } from "./types";

const positionsContext = createContext<PositionType[]>([]);

export function PositionsProvider(props: PropsWithChildren<{ positions: PositionType[] }>) {
	return <positionsContext.Provider value={props.positions}>
		{props.children}
	</positionsContext.Provider>
}

export function usePositionsContext() {
	return useContext(positionsContext);
}