import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const id = url.searchParams.get('id') ?? '0';

	const result = await client.query(
		`SELECT id, name, first_name, last_name, cellphone, speciality, email FROM ${doctor_table} where id=$1;`,
		[id]
	);

	if (result.rowCount == 1) {
		return json(result.rows[0]);
	}

	return json({});
};
