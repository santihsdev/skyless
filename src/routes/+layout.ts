import { masterKey, masterToken } from '$lib/stores/store';
import Cookies from 'js-cookie';

/** @type {import('./$types').LayoutLoad} */
export function load({}) {
	const token = Cookies.get('token');
	const key = Cookies.get('key');
	
	masterKey.set(key ?? 'key-from-layout');
	masterToken.set(token ?? 'key-from-layout');
}
