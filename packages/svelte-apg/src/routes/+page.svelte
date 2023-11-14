<script>
	import Button from "$lib/Button/Button.svelte";

	function handleClick() {
		console.log("Click");
	}
</script>

<Button on:click={handleClick}>Hello, World!</Button>
