import type { User } from '$lib/types/user';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { user, password }: User = await request.json();
	// console.log(user, password);

	const resp = await fetch('http://0.0.0.0:8080/realms/test/protocol/openid-connect/token', {
		method: 'POST',
		body: new URLSearchParams({
			grant_type: 'password',
			username: user,
			password: password,
			client_id: 'client-test'
		}).toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

	const result = await resp.json();
	return json(result);
};
