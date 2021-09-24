import { mdsvex } from "mdsvex";
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],

    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
		preprocess(),
		mdsvex({
			extensions: [".md"],
			layout: {
				mds: path.join(dirname, "./src/routes/tutorials/_layout.svelte")
			}
		})
	],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// paths: {
		// 	base: '/Computron',
		// }
	}
};

export default config;
 