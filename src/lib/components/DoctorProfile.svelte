<script>
	import BagIcon from '../../icons/BagIcon.svelte';
	import CardIcon from '../../icons/CardIcon.svelte';
	import ClockIcon from '../../icons/ClockIcon.svelte';
	import HatIcon from '../../icons/HatIcon.svelte';
	import PhoneIcon from '../../icons/PhoneIcon.svelte';

	let fecha;
	let hora;
	let descripcion;

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		fecha = formData.get('fecha');
		hora = formData.get('hora');
		descripcion = formData.get('descripcion');

		if (fecha && hora && descripcion) {
			console.log('Fecha:', fecha);
			console.log('Hora:', hora);
			console.log('Descripción:', descripcion);
			closeModal();
		}
	}
	function closeModal() {
		const modalCheckbox = document.getElementById('my-modal-3');
		modalCheckbox.checked = false;
	}
</script>

<div class="card lg:card-side bg-base-100 mb-4 pt-12 pb-0 pl-20 sm:ml-64">
	<figure>
		<div class="avatar">
			<div class="w-24 rounded">
				<img src="./src/lib/images/default.png" alt="default" />
			</div>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Fady Khoury-Collado, MDS</h2>
		<p>
			<b>Specialities:</b> Lorem, adipisicing, Accusantium, reiciendis!
		</p>
		<div>
			<div class="sm:flex">
				<PhoneIcon />
				<p>212-395-3210</p>
			</div>
		</div>
	</div>
</div>

<div class="px-5 pl-72">
	<div class="sm:flex">
		<CardIcon />
		<h3 class="px-5 text-2xl font-bold">About Fady Khoury-Collado</h3>
	</div>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>

<div class="sm:flex p-14 pl-72 justify-center">
	<div class="stats stats-vertical lg:stats-horizontal shadow">
		<div class="stat w-80">
			<div>
				<div class="sm:flex justify-center">
					<HatIcon />
				</div>
				<h3 class="px-5 text-xl font-bold text-center py-5">Education</h3>
				<p class="text-base">Fellowship: Memorial Sloan-Kettering Cancer Center</p>
				<p class="text-base">Internship: State University of New York - Downstate Medical Center</p>
				<p class="text-base">Residency: Lutheran Medical Center</p>
				<p class="text-base">Residency: Lutheran Medical Center</p>
			</div>
		</div>

		<div class="stat w-72">
			<div>
				<div class="sm:flex justify-center">
					<BagIcon />
				</div>
				<h3 class="text-xl font-bold py-5 text-center">Board certifications</h3>
				<p class="text-base">Ginecologic Oncology</p>
				<p class="text-base">Obstetrics and Gynecology</p>
			</div>
		</div>

		<div class="stat">
			<div class="sm:flex justify-center">
				<ClockIcon />
			</div>
			<h3 class="px-5 py-5 text-xl font-bold text-center">Doctor Office Hours</h3>
			<div class="overflow-x-auto">
				<table class="border-separate border-spacing-2">
					<tbody>
						<tr>
							<th class="text-left">Thursday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Friday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr><tr>
							<th class="text-left">Saturday</th>
							<td>Closed</td>
						</tr>
						<tr>
							<th class="text-left">Sunday</th>
							<td>Closed</td>
						</tr>
						<tr>
							<th class="text-left">Monday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Tuesday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Wednesday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<div class="pl-64">
	<form on:submit={handleSubmit}>
		<h1 class="title">Schedule an appointment</h1>
		<div class="form-control">
			<label class="label">Fecha:</label>
			<input class="input" type="date" name="fecha" required />
		</div>
		<div class="form-control">
			<label class="label">Hora:</label>
			<input class="input" type="time" name="hora" required />
		</div>
		<div class="form-control">
			<label class="label">Descripción:</label>
			<textarea class="textarea" name="descripcion" rows="4" />
		</div>
		<button type="submit" class="btn btn-primary">Schedule</button>
	</form>
</div>

<style>
	form {
		margin: 0 auto;
		padding: 2rem;
		background-color: #ffffff;
		color: black;
		font-family: Arial, serif;
	}
	.form-control {
		margin-bottom: 1rem;
	}
	.label {
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.title {
		display: block;
		font-weight: bold;
		font-size: 1.6rem;
		margin: auto;
		text-align: center;
	}
	input[type='date'],
	input[type='time'] {
		width: 40%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		font-size: 1rem;
		line-height: 1.5;
		background-color: #fff;
		color: #000;
	}

	input[type='date']::-webkit-calendar-picker-indicator,
	input[type='time']::-webkit-calendar-picker-indicator {
		background-color: #79ccd1;
		color: #fff;
		border: none;
		border-radius: 0.25rem;
		padding: 0.25rem;
	}

	.textarea {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #cccccc;
		border-radius: 0.25rem;
		font-size: 1rem;
		line-height: 1.5;
		background-color: rgba(231, 231, 231, 0.54);
	}

	.textarea {
		resize: vertical;
		background-color: white;
	}


</style>
