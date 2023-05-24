import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../doctors/$types';

export const GET: RequestHandler = async ({}: RequestEvent) => {
	const result = await client.query(`SELECT * FROM ${doctor_table}`);

	let doctors = result.rows.map(({ id, first_name, last_name, cellphone, speciality, email }) => ({
		id: id,
		name: first_name,
		lastName: last_name,
		cellphone: cellphone,
		speciality: speciality,
		email: email
	}));

	console.log(doctors);

	return json(doctors);
};
