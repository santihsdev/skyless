import type { Doctor } from '$lib/types/doctor';

interface Errors {
	speciality: boolean;
	cellphone: boolean;
	ci: boolean;
	gender: boolean;
}

interface Messages {
	speciality: string;
	cellphone: string;
	ci: string;
	gender: string;
}

const useRegisterForm = () => {
	let doctor: Doctor = {
		cellphone: '',
		email: '',
		lastName: '',
		name: '',
		speciality: '',
		ci: '',
		gender: '',
		id: ''
	};

	let errors: Errors = {
		speciality: false,
		cellphone: false,
		ci: false,
		gender: false
	};

	let messages: Messages = {
		speciality: '',
		cellphone: '',
		ci: '',
		gender: ''
	};

	const cleanError = (json: Errors) => {
		Object.keys(json).forEach((key) => (json[key as keyof typeof errors] = false));
	};

	const cleanMessage = (json: Messages) => {
		Object.keys(json).forEach((key) => (json[key as keyof typeof messages] = ''));
	};

	const cleanDoctor = () => {
		doctor = {
			cellphone: '',
			ci: '',
			email: '',
			gender: '',
			lastName: '',
			name: '',
			speciality: ''
		};
	};

	const cleanAll = () => {
		cleanError(errors);
		cleanMessage(messages);
		cleanDoctor();
	};

	return { errors, messages, doctor, cleanAll, cleanMessage, cleanError };
};

export default useRegisterForm;
