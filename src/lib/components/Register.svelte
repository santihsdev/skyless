<script lang="ts">
	import { authToken, masterKey } from '$lib/stores/store';
	import type { Auth } from '$lib/ts/keycloak';

	let speciality = '';
	let cellphone = '';
	let doctorCode = 1234;
	let key: string;
	masterKey.subscribe((value) => {
		key = value;
	});

	let authStore: Auth;
	authToken.subscribe((value) => {
		authStore = value;
	});

	const handleSubmit = async () => {
		console.log('click');
		if (doctorCode === 1234) {
			const resp = await fetch(`/api/patients/read?id=${key}&token=${authStore.getClient().token}`);
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

			await fetch('/api/add-to-group', {
				method: 'POST',
				body: JSON.stringify({
					token: authStore.getClient().token,
					idUser: id,
					groupName: 'doctor'
				})
			});
		}
	};
</script>

<main>
	<div class="close-btn">&times;</div>
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

<style>
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
	body {
		background: linear-gradient(to right, #3a7bd5, #3a6073);
		font-family: 'Raleway', sans-serif;
		height: 100vh;
	}
	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.center button {
		padding: 10px 20px;
		font-size: 15px;
		font-weight: 600;
		color: #222;
		background: f5f5f5;
		border: none;
		outline: none;
		cursor: pointer;
		border-radius: 5px;
	}

	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 15px;
		height: 15px;
		background: #888;
		color: #eee;
		text-align: center;
		line-height: 15px;
		border-radius: 15px;
		cursor: pointer;
	}
	.form h2 {
		text-align: center;
		color: #222;
		margin: 10px 0px 20px;
		font-size: 25px;
	}
	.form .form-element {
		margin: 15px 0px;
	}
	.form .form-element label {
		font-size: 14px;
		color: #222;
	}
	.form .form-element input[type='text'],
	.form .form-element input[type='password'] {
		margin-top: 5px;
		display: block;
		width: 100%;
		padding: 10px;
		outline: none;
		border: 1px solid #aaa;
		border-radius: 5px;
	}
	.form .form-element input[type='checkox'] {
		margin-right: 5px;
	}
	.form .form-element button {
		width: 100px;
		height: 40px;
		border: none;
		outline: none;
		font-size: 16px;
		background: #222;
		color: #f5f5f5;
		border-radius: 10px;
		cursor: pointer;
	}
	.form .form-element a {
		display: block;
		text-align: right;
		font-size: 15px;
		color: #1a79ca;
		text-decoration: none;
		font-weight: 600;
	}
	.form .user-selector {
		color: red;
		text-align: center;
	}

	.form .user-type {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.form .user-type select {
		background-color: #0563af;
		color: white;
		padding: 12px;
		width: 250px;
		border: none;
		font-size: 20px;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
		-webkit-appearance: button;
		appearance: button;
		outline: none;
	}

	.form .user-type::before {
		content: '\f13a';
		font-family: FontAwesome;
		position: absolute;
		top: 0;
		right: 0;
		width: 20%;
		height: 100%;
		text-align: center;
		font-size: 28px;
		line-height: 45px;
		color: rgba(255, 255, 255, 0.5);
		background-color: rgba(255, 255, 255, 0.1);
		pointer-events: none;
	}

	.form .user-type:hover::before {
		color: rgba(255, 255, 255, 0.6);
		background-color: rgba(255, 255, 255, 0.2);
	}

	.form .user-type select option {
		padding: 30px;
	}
</style>
