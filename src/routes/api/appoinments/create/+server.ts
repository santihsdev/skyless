import { client } from '$lib/database/connector';
import { appointment_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from './$types';
import type { Reminder } from '$lib/types/reminder';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { date, description, hour, id_doctor, id_user }: Reminder = await request.json();

	const result = await client.query(
		`INSERT INTO ${appointment_table} (date, hour, description, id_doctor, id_user) VALUES ($1, $2, $3, $4, $5)`,
		[date, hour, description, id_doctor, id_user]
	);

	return json({ altered: result.rowCount });
};
