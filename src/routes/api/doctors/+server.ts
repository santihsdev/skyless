import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Doctor } from '$lib/types/doctor';

export const GET = async ({}: RequestHandler) => {
	const result = await client.query(`SELECT * FROM ${doctor_table}`);

	let doctors: Doctor[] = result.rows.map(
		({ id, first_name, last_name, cellphone, speciality, email }) => ({
			id: id,
			name: first_name,
			lastName: last_name,
			cellphone: cellphone,
			speciality: speciality,
			email: email
		})
	);

	return json(doctors);
};
