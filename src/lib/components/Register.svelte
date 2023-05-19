<script lang="ts">
	import { masterToken, masterKey } from '$lib/stores/store';
	import type { Auth } from '$lib/ts/keycloak';

	let speciality = '';
	let cellphone = '';
	let doctorCode = 1234;
	let key: string;
	masterKey.subscribe((value) => {
		key = value;
	});

	let token: string;
	masterToken.subscribe((value) => (token = value));

	const handleSubmit = async () => {
		console.log('click');
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
					cellphone,
					speciality,
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
