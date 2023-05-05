import { client } from '$lib/database/connector';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { id_appointment } = await request.json();

	const result = await client.query('DELETE FROM public.appointment_form WHERE id_appointment=$1', [
		id_appointment
	]);

	console.log(result);

	return json(result.rowCount);
}
