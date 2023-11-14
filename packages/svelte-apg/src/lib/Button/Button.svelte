<script lang="ts" context="module">
	import type { HTMLButtonAttributes } from "svelte/elements";

	export type ButtonType = "button" | "submit" | "reset";
</script>

<script lang="ts">
	import { createButton } from "./Button";

	interface $$Props extends HTMLButtonAttributes {
		/**
		 * @default "button"
		 */
		type?: ButtonType;
	}

	export let type: ButtonType = "button";

	const { button } = createButton();
</script>

<button {type} {...$$restProps} use:button on:click>
	<slot>Button</slot>
</button>
