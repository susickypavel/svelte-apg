import type { Action } from "svelte/action";

export function createButton() {
	const button: Action<HTMLButtonElement> = (node) => {
		console.log("Button mounted");

		return {
			destroy() {
				console.log("Button unmounted", node);
			}
		};
	};

	return {
		button
	};
}
