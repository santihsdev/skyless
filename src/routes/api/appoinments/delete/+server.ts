import { client } from '$lib/database/connector';
import { appointment_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id_appointment } = await request.json();

	const result = await client.query(`DELETE FROM ${appointment_table} WHERE id_appointment=$1`, [
		id_appointment
	]);

	return json(result.rowCount);
}
