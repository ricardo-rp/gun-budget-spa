import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// More information on adapter-static
// https://kit.svelte.dev/docs/adapters#supported-environments-static-sites

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: '200.html'
		})
	}
};

export default config;
