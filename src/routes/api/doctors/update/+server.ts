import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id, name, lastName, cellphone, speciality, email } = await request.json();

	const result = await client.query(
		`UPDATE ${doctor_table} SET id=$1, name=$2, first_name=$3, last_name=$4, cellphone=$5, speciality=$6, email=$7 WHERE id=$1;`,
		[id, `${name} ${lastName}`, name, lastName, cellphone, speciality, email]
	);

	console.log(result);

	return json(result.rowCount);
}
