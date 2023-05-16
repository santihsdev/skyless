import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { error } from '@sveltejs/kit';
import Cookies from 'js-cookie';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const token = Cookies.get('token');
	const key = Cookies.get('key');

	if (token != undefined && key != undefined) {
		const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);

		if (resp.status == 200) {
			return { isLogged: true };
		}
		console.log('layout: ', resp.status);
	}
	return { isLogged: false };
}
