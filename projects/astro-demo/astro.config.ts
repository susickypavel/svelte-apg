import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	server: {
		port: 6000,
		host: true
	},
	integrations: [svelte()]
});
