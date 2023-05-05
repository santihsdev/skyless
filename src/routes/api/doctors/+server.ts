import { client } from '$lib/database/connector';
import { error, json } from '@sveltejs/kit';

export type Doctor = {
	id: string;
	name: string;
	lastName: string;
	cellphone: string;
	speciality: string;
	email: string;
};

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url: URL }) => {
	const result = await client.query('SELECT * FROM doctor');

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
