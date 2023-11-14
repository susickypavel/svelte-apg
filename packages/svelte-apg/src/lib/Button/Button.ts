import type { Action } from "svelte/action";

export function createButton() {
	const button: Action<HTMLButtonElement> = (_node) => {
		return {
			destroy() {
				_node;
			}
		};
	};

	return {
		button
	};
}
