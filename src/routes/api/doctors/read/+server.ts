import { client } from '$lib/database/connector';
import { error, json } from '@sveltejs/kit';
const { doctor_table } = require('.././../../../../database-variables.js');

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const id = url.searchParams.get('id') ?? '0';

	const result = await client.query(
		'SELECT id, name, first_name, last_name, cellphone, speciality, email FROM ${doctor_table} where id=$1;',
		[id]
	);

	console.log(result.rowCount);
	if (result.rowCount == 1) {
		return json(result.rows[0]);
	}

	error(404);
}
