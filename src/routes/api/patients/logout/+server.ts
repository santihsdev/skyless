import { json, error } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export type Client = {
	email?: string;
	firstName: string;
	lastName: string;
	username?: string;
};

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { idUser, token } = await request.json();

	const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/users/${idUser}/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`
		}
	});

	console.log('logout server: ', resp.status);

	if (resp.status == 204) {
		return json({ ok: resp.status });
	}
	throw error(resp.status, 'Error');
};
