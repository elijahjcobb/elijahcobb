import cn from "classnames";
import styles from "./index.module.css";

export function SideBar({ children, className }: { className?: string, children?: React.ReactNode }) {
	return <div className={cn(styles.container, className)}>
		{children}
	</div>
}