import Cookies from 'js-cookie';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	return { isLogged: false };
}
