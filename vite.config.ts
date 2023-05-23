/// <reference types="vitest" />
/// <reference types="vite/client" />

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ["tests/setupTest.ts"]
	}
});
