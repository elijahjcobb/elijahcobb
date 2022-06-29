export interface VerticalLineProps {
	width?: string | number;
	height?: string | number;
	color?: string;
}

export function VerticalLine({ width = "2px", height = "64px", color = "var(--white)" }: VerticalLineProps) {
	return <div className="vertical-line" style={{
		width,
		height,
		display: 'block',
		background: color
	}} />
}