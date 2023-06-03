<script lang="ts">
	import { appointmentSchema } from '$lib/schemas/appointmentSchema';
	import { updateReminders } from '$lib/ts/useUpdateReminder';
	import type { Reminder } from '$lib/types/reminder';
	import { ZodError } from 'zod';
	import { appointmentForm, editAppointment, createAppoinment} from '$lib/ts/useReminderForm';

	export let id = '';
	let isBadDescription: boolean = false;
	let messageDescription: string = '';
	export let isVisible: boolean = false;
	export let isEdit: boolean = false;

	$: isBadDescription;
	$: isVisible;

	const handleSubmit = async () => {
		try {
			isBadDescription = false;
			if (isEdit) {
				appointmentForm.id_appointment = parseInt(id);
				const appointment: Reminder = appointmentSchema.parse(appointmentForm);
				isVisible = await editAppointment(isVisible, appointment);
				await updateReminders(appointment.id_user);
			} else {
				appointmentForm.id_doctor = id;
				appointmentForm.id_user = localStorage.getItem('key') ?? '';
				const appointment: Reminder = appointmentSchema.parse(appointmentForm);
				isVisible = await createAppoinment(isVisible, appointment);
			}
		} catch (error) {
			if (error instanceof ZodError) {
				error.issues.forEach((err) => {
					if (err.path[0] === 'description') {
						isBadDescription = true;
						messageDescription = err.message;
					}
				});
			}
		}
	};
</script>

<input type="checkbox" id={`my-modal-${id}`} class="modal-toggle" bind:checked={isVisible} />

<div class="modal">
	<div class="modal-box relative">
		<label for={`my-modal-${id}`} class="btn btn-primary btn-circle absolute right-2 top-2">✕</label
		>
		<form on:submit={handleSubmit}>
			<h1>{id}</h1>
			<h1 class="title">Book Medical Appointment</h1>
			<div class="form-control">
				<label class="label" for="date">Fecha:</label>
				<input class="input" type="date" name="date" required bind:value={appointmentForm.date} />
			</div>
			<div class="form-control">
				<label class="label" for="hour">Hora:</label>
				<input class="input" type="time" name="hour" required bind:value={appointmentForm.hour} />
			</div>
			<div class="form-control">
				<label for="description" class="label">Descripción:</label>
				<textarea
					class="textarea"
					class:textarea-error={isBadDescription}
					name="description"
					rows="4"
					bind:value={appointmentForm.description}
				/>
				{#if isBadDescription}
					<label for="description" class="label">
						<span class="label-text-alt text-red-500">{messageDescription}</span>
					</label>
				{/if}
			</div>

			<div class="modal-action">
				<button type="submit" class="btn btn-primary right-2 top-2">
					{#if isEdit}
						Edit
					{:else}
						Schedule
					{/if}
				</button>
			</div>
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
</style>
