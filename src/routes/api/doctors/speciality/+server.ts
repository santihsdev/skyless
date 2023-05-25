import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const id = url.searchParams.get('id') ?? '0';

	const result = await client.query(
		`SELECT id, name, first_name, last_name, cellphone, speciality, email FROM ${doctor_table} where speciality_id=$1;`,
		[id]
	);

	return json(result.rows);
};
