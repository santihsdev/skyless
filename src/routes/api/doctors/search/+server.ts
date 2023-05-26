import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const name = url.searchParams.get('name') ?? '0';

  console.log(name);
  
	const result = await client.query(
    `SELECT name FROM ${doctor_table} WHERE name LIKE $1;`, [`'%${name}%'`]
	);
  console.log(result);

	return json(['hello']);
};