import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';
import Cookies from 'js-cookie';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const token = Cookies.get('token');
	const key = Cookies.get('key');

	if (token != undefined && key != undefined) {
		const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);

		if (resp.status == 200) {
			return { isLogged: true };
		}
		if (resp.status == 401) {
			Cookies.remove('token');
			Cookies.remove('key');
			const resp = await fetch('/api/patients/logout', {
				method: 'POST',
				body: JSON.stringify({
					token,
					IdUser: key
				})
			});
			console.log(resp);
			
			return { isLogged: false };
		}
		console.log(resp.status);
	}
	return { isLogged: false };
}
