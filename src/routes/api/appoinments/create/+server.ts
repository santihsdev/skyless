import { client } from '$lib/database/connector';
import { appointment_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';

export const POST: RequestHandler = async (event: RequestEvent) => {
	const body = await event.request.formData();

	const result = await client.query(
		`INSERT INTO ${appointment_table} (date, hour, description, id_doctor, id_user) VALUES ($1, $2, $3, $4, $5)`,
		[
			body.get('date'),
			body.get('hour'),
			body.get('description'),
			body.get('id_doctor'),
			body.get('id_user')
		]
	);

	return json(result.rows[0]);
};
