import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ cookies, url }) {
	const token = cookies.get('token');
	const key = cookies.get('key');
	const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);
	if (resp.status == 200) {
		return {isLogged : true};
	}
	if (resp.status == 401) {
		return {isLogged : false};
	}
	console.log(resp.status);
}
