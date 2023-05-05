import { client } from '$lib/database/connector';
import { json, error } from '@sveltejs/kit';

export type Client = {
	email: string;
	firstName: string;
	lastName: string;
	username?: string;
};

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { idUser, token, client } = await request.json();

	const userValues: Client = client;

	const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/users/${idUser}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify(userValues)
	});

	console.log(resp.status);

	if (resp.status == 204) {
		return json({ ok: resp.status });
	}
	throw error(resp.status, 'Error');
}
