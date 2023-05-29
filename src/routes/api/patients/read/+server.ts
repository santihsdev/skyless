import { json, error } from '@sveltejs/kit';
import type { RequestHandler, RequestEvent } from './$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const id = url.searchParams.get('id') ?? 0;
	const token = url.searchParams.get('token') ?? 0;

	const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/users/${id}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Bearer ${token}`
		}
	});

	const result = await resp.json();
	if (resp.status == 200) {
		return json({ ...result });
	}
	throw error(resp.status, 'Error');
};
