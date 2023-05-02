import { json } from '@sveltejs/kit';
import { client } from '$lib/database/connector';

/** @type {import('./$types').RequestHandler} */
export async function GET(event) {
	// log all headers
	const result = await client.query('SELECT * FROM appointment_form');

	return json(result.rows);
}
