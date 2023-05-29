import '@testing-library/jest-dom';
import matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';
import type { Navigation, Page } from '@sveltejs/kit';
import type { Subscriber } from 'svelte/store';
import type * as environment from '$app/environment';
import type * as navigation from '$app/navigation';
import type * as stores from '$app/stores';

// Add custom jest matchers
expect.extend(matchers);

// Mock SvelteKit runtime module $app/environment
vi.mock('$app/environment', (): typeof environment => ({
	browser: false,
	dev: true,
	building: true,
	version: ''
}));

// Mock SvelteKit runtime module $app/navigation
vi.mock('$app/navigation', (): typeof navigation => ({
	afterNavigate: () => {},
	beforeNavigate: () => {},
	disableScrollHandling: () => {},
	goto: () => Promise.resolve(),
	invalidate: () => Promise.resolve(),
	invalidateAll: () => Promise.resolve(),
	preloadCode: () => Promise.resolve(),
	preloadData: () => Promise.resolve()
}));

vi.mock('$app/stores', async () => {
	const { readable, writable } = await import('svelte/store');
	const getStores = () => ({
		navigating: readable(null),
		page: readable({ url: new URL('http://localhost'), params: {} }),
		session: writable(null),
		updated: readable(false),
	});
	/** @type {typeof import('$app/stores').page} */
	const page = {
		subscribe(fn: Subscriber<{ url: URL; params: {} }>) {
			return getStores().page.subscribe(fn);
		}
	};
	/** @type {typeof import('$app/stores').navigating} */
	const navigating = {
		subscribe(fn: Subscriber<null>) {
			return getStores().navigating.subscribe(fn);
		}
	};
	/** @type {typeof import('$app/stores').session} */
	const session = {
		subscribe(fn: Subscriber<null>) {
			return getStores().session.subscribe(fn);
		}
	};
	/** @type {typeof import('$app/stores').updated} */
	const updated = {
		subscribe(fn: Subscriber<boolean>) {
			return getStores().updated.subscribe(fn);
		}
	};
	return {
		getStores,
		navigating,
		page,
		session,
		updated
	};
});
