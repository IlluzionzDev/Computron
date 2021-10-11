import { mdsvex } from "mdsvex";
import preprocess from 'svelte-preprocess';
// Deploying to Vercel
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';
import { fileURLToPath } from 'url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.md'],

    preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			// The layout for our tutorial files
			layout: path.join(dirname, "./src/routes/tutorials/_layout.svelte")
		})
	],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	}
};

export default config;
 