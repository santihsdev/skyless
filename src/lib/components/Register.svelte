<script lang="ts">
	import { masterToken, masterKey } from '$lib/stores/store';
	import type { Auth } from '$lib/ts/keycloak';
	import { z } from 'zod';

	const doctorSchema = z.object({
		speciality: z.string().nonempty('Speciality field cannot be empty'),
		cellphone: z.string().nonempty('Cellphone field cannot be empty'),
		doctorCode: z.number().refine(value => value !== 1234, {
			message: 'Doctor code cannot be 1234',
		}),
		identityCard: z.string().nonempty('Identity Card field cannot be empty'),
		gender: z.string().nonempty('Gender field cannot be empty')
	});

	let speciality = '';
	let cellphone = '';
	let doctorCode = 1234;
	let identityCard = '';
	let gender = '';
	let key: string;
	masterKey.subscribe((value) => {
		key = value;
	});

	let token: string;
	masterToken.subscribe((value) => (token = value));

	const handleSubmit = async () => {
		console.log('click');

		const doctor = { speciality, cellphone, doctorCode, identityCard, gender };
		if (doctorCode === 1234) {
			const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);
			const js = await resp.json();
			const { id, firstName, lastName, email } = js;

			await fetch('/api/doctors/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					id,
					name: firstName,
					lastName,
					cellphone: doctor.cellphone,
					speciality: doctor.speciality,
					email
				})
			});

			await fetch('/api/group/add', {
				method: 'POST',
				body: JSON.stringify({
					token: token,
					idUser: id,
					groupName: 'doctor'
				})
			});
		}
	};
</script>

<main>
	<div class="form">
		<header>Register Form</header>
		<div class="form-element">
			<label for="Specialty">Specialy: </label>
			<input
					type="text"
					id="Specialty"
					placeholder="Enter Your Specialty"
					bind:value={speciality}
			/>
		</div>
		<div class="form-element">
			<label for="cellphone">Cellphone: </label>
			<input type="text" id="cellphone" placeholder="Enter your cellphone" bind:value={cellphone} />
		</div>
		<div class="form-element">
			<label for="identityCard">CI: </label>
			<input type="text" id="identityCard" placeholder="Enter your CI" bind:value={identityCard} />
		</div>
		<div class="form-element">
			<label for="gender">Gender: </label>
			<select id="gender" bind:value={gender}>
				<option value="">Select your gender</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="other">Other</option>
			</select>
		</div>
		<div class="form-element">
			<label for="doctor-code">Doctor code: </label>
			<input type="password" id="doctor-code" placeholder="doctor-code" bind:value={doctorCode} />
		</div>
		<div class="form-element">
			<a href="#">Forgot password</a>
		</div>
		<div class="modal-action" on:click={handleSubmit}>
			<label for="my-modal">Register</label>
		</div>
	</div>
</main>

