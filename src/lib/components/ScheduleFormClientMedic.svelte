<script>
	import {onMount} from "svelte";
	export let id = '';
	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const id_user = "2";

		formData.append("id_doctor", id);
		formData.append("id_user", id_user);

		const result = await fetch("api/appoinments/create", {method: "POST", body: formData});
		console.log(await result.json());
	}
	let forms = [];
	onMount(async () => {
		forms = await fetch("api/appoinments/get-all").then(item => item.json());
	});
</script>

<label for="my-modal-3" class="btn">schedule now</label>
<input type="checkbox" id="my-modal-3" class="modal-toggle" />


<div class="modal">
	<div class="modal-box relative">
		<label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<form on:submit={handleSubmit}>
			<h1 class="title">Book Medical Appointment</h1>
			<div class="form-control">
				<label class="label">Fecha:</label>
				<input class="input" type="date" name="date" required />
			</div>
			<div class="form-control">
				<label class="label">Hora:</label>
				<input class="input" type="time" name="hour" required />
			</div>
			<div class="form-control">
				<label class="label">Descripción:</label>
				<textarea class="textarea" name="description" rows="4" />
			</div>

			<button type="submit" class="btn2" onclick="document.querySelector('.modal-toggle').checked = false;">Schedule</button>
		</form>
	</div>
</div>


<style>
	form {
		max-width: 400px;
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
		width: 100%;
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
	.btn {
		margin-top: 0.5rem;
		background-color: #79ccd1;
		color: #fff;
	}
	.btn2 {
		display: block;
		margin-top: 1.5rem;
		background-color: #79ccd1;
		color: #fff;
		border: none;
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		font-size: 1rem;
		cursor: pointer;
		margin-left: 15rem;
	}
</style>
