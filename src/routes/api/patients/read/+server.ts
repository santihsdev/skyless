import { json, error } from '@sveltejs/kit';

export type Client = {
	email?: string;
	firstName: string;
	lastName: string;
	username?: string;
};

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { idUser, token, client } = await request.json();

	const userValues: Client = client;

	('http://0.0.0.0:8080/admin/realms/test/users/5a2ddc0c-c5af-447c-8b06-de8e30cf97ca');
	const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/users/${idUser}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Bearer ${token}`
		}
	});

	console.log(resp.status);

	const result = await resp.json();
	if (resp.status == 200) {
		return json({ result });
	}
	throw error(resp.status, 'Error');
}
