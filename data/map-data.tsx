import { createContext, useContext } from "react";

export interface MapPin { lat: number, lng: number }

const context = createContext<MapPin[]>([]);

export const MapDataProvider = context.Provider;

export function useMapData(): MapPin[] {
	return useContext(context);
}