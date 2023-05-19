import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, name, lastName, cellphone, speciality, email } = await request.json();

	const result = await client.query(
		`INSERT INTO ${doctor_table}(id, name, first_name, last_name, cellphone, speciality, email) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
		[id, `${name} ${lastName}`, name, lastName, cellphone, speciality, email]
	);

	console.log(result);

	return json(result.rowCount);
}
