import { error, json } from '@sveltejs/kit';

export type Doctor = {
	id: string;
	name: string;
	lastName: string;
	cellphone: string;
	speciality: string;
	email: string;
};

const doctors: Doctor[] = [
	{
		id: "1",
		name: 'Doctor 1',
		lastName: 'LastName',
		cellphone: '2323423',
		email: 'test@doctor.com',
		speciality: 'Odontologist'
	},
	{
		id: "2",
		name: 'Doctor 2',
		lastName: 'LastName',
		cellphone: '2323423',
		email: 'test@doctor.com',
		speciality: 'Oncologist'
	},
	{
		id: "3",
		name: 'Doctor 3',
		lastName: 'LastName',
		cellphone: '2323423',
		email: 'test@doctor.com',
		speciality: 'Cardiologist'
	},
	{
		id: "4",
		name: 'Doctor 4',
		lastName: 'LastName',
		cellphone: '2323423',
		email: 'test@doctor.com',
		speciality: 'Cardiologist'
	}
];

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	return json(doctors);
}
