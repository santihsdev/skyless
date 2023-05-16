import Cookies from 'js-cookie';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const token = Cookies.get('token');
	const key = Cookies.get('key');

	if (token !== undefined && key !== undefined) {
		const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);

		if (resp.status == 200) {
			return { isLogged: true };
		}
	}
	return { isLogged: false };
}
