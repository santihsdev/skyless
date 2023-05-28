import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';
import type { Doctor } from '$lib/types/doctor';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { id, name, lastName, cellphone, speciality, email, ci, gender }: Doctor =
		await request.json();

	const result = await client.query(
		`INSERT INTO ${doctor_table}(id, name, first_name, last_name, cellphone, speciality, email, gender, ci, speciality_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
		[
			id,
			`${name} ${lastName}`,
			name,
			lastName,
			cellphone,
			speciality,
			email,
			gender,
			ci,
			speciality
		]
	);

	console.log(result);

	return json(result.rowCount);
};
