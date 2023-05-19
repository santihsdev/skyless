import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ cookies, url }) {
	// let key, token;
	// // const key = url.searchParams.get('key') ?? '0';
	// // const myToken = url.searchParams.get('token') ?? 'Not Found';
	// if (browser) {
	// 	key = localStorage.getItem('key');
	// 	token = localStorage.getItem('token');
	// }
	// console.log("hello ",  key, token);

	// cookies.set('token', token, { path: '/' });
	// cookies.set('key', key, { path: '/' });
}
