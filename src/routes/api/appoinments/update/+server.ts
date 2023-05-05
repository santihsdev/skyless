import { client } from '$lib/database/connector';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { hour, description, date, id_doctor, id_user, id_appointment } = await request.json();

	const result = await client.query(
		'UPDATE public.appointment_form SET hour=$1, description=$2, date=$3, id_doctor=$4, id_user=$5 WHERE id_appointment=$6',
		[hour, description, date, id_doctor, id_user, id_appointment]
	);

	console.log(result);

	return json(result.rowCount);
}