import { client } from '$lib/database/connector';
import { speciality_table } from '$lib/database/database-variables';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../doctors/$types';
import type { Speciality } from '$lib/types/speciality';

export const GET: RequestHandler = async ({}: RequestEvent) => {
	const result = await client.query(`SELECT * FROM ${speciality_table}`);

	let specialities: Speciality[] = result.rows.map(({ id, specialityname }) => ({
		id: id,
		name: specialityname
	}));

	return json(specialities);
};
