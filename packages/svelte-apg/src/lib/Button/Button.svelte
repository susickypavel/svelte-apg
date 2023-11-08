<script lang="ts" context="module">
	export type ButtonType = "button" | "submit" | "reset";
</script>

<script lang="ts">
	import { createButton } from "./Button";

	export let type: ButtonType = "button";

	const { button } = createButton();
</script>

<button use:button {type}>
	<slot>Button</slot>
</button>
