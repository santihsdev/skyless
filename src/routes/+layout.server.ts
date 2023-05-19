import { masterKey, masterToken } from '$lib/stores/store';

/** @type {import('./$types').LayoutLoad} */
export function load({ cookies }) {
	const token = cookies.get('token');
	const key = cookies.get('key');
	masterKey.set(key);
	masterToken.set(token);
}
