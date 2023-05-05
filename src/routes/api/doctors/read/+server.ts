import { client } from '$lib/database/connector';
import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const id = url.searchParams.get('id-doctor') ?? '0';

	const result = await client.query(
		'SELECT id, name, first_name, last_name, cellphone, speciality, email FROM public.doctor where id=$1;',
		[id]
	);

	console.log(result.rowCount);
	if (result.rowCount == 1) {
		return json(result.rows[0]);
	}

	error(404);
}