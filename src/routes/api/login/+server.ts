import { json } from '@sveltejs/kit';

interface User {
	user: string;
	password: string;
}

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
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
