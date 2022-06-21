import { PropsWithChildren, useEffect } from "react";

export interface FadeInContainer {

}

export function FadeInContainer(props: PropsWithChildren<FadeInContainer>) {
	return <div className='fade-in-container'>
		<style jsx>{`
			@keyframes fadeIn {
				from {
					opacity: 0;
				}
				to {
					opacity: 1;
				}
			}
			.fade-in-container {
				animation: fadeIn 0.5s ease-in-out;
			}
		`}</style>
		{props.children}
	</div>
}