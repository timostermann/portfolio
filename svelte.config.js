import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			components: "src/components",
			assets: "src/assets",
			routes: "src/routes",
			utils: "src/utils",
			data: "src/data"
		}
	}
};

export default config;
