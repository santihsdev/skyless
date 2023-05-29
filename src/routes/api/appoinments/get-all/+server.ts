import { json } from '@sveltejs/kit';
import { client } from '$lib/database/connector';
import { appointment_table } from '$lib/database/database-variables';
import type { RequestEvent, RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	// log all headers
	const idUser = url.searchParams.get('key') ?? 0;
	if (idUser == 0) {
		return json([]);
	}
	const result = await client.query(`SELECT * FROM ${appointment_table} where id_user=$1`, [
		idUser
	]);

	return json(result.rows);
};
