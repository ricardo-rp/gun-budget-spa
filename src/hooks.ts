import type { Handle } from '@sveltejs/kit';

// Globally disable SSR to prevent development mode from breaking
// https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
export const handle: Handle = async ({ event, resolve }) =>
	resolve(event, {
		ssr: false
	});
