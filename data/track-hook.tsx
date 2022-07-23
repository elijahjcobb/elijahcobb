export function useMetric(): (key: string) => void {
	return (key: string) => {
		fetch(`/api/track?key=${encodeURIComponent(key)}`)
			.catch(console.error)
	}
}