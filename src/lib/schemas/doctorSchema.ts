import { z } from 'zod';

export const doctorSchema = z.object({
	speciality: z.string().refine((value) => value !== 'Pick one', {
		message: 'You need to select an speciality'
	}),
	cellphone: z.string().refine((value) => /^[67]\d{7}$/.test(value), {
		message: 'The cellphone is not valid'
	}),
	ci: z.string().min(7, { message: 'The ci is not valid' }),
	gender: z.string().refine((value) => value !== 'Select your gender', {
		message: 'You need to select a gender'
	}),
	id: z.string().nonempty(),
	name: z.string().nonempty(),
	lastName: z.string().nonempty(),
	email: z.string().email()
});
