import type { Client } from '$lib/types/client';
import { json, error } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

/** @type {import('./$types').RequestHandler} */
export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { idUser, token, client } = await request.json();

	const userValues: Client = client;

	('http://0.0.0.0:8080/admin/realms/test/users/5a2ddc0c-c5af-447c-8b06-de8e30cf97ca');
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
};
