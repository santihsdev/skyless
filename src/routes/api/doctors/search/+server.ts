import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const name = url.searchParams.get('name') ?? '0';

	const result = await client.query(`SELECT * FROM ${doctor_table} WHERE name ILIKE '%${name}%';`);

	return json(result.rows);
};
