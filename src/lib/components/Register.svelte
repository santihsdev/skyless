<script lang="ts">
	import { goto } from '$app/navigation';
	import { doctorSchema } from '$lib/schemas/doctorSchema';
	import { masterToken, masterKey } from '$lib/stores/store';
	import useRegisterForm from '$lib/ts/useRegisterForm';
	import type { Speciality } from '$lib/types/speciality';
	import { onMount } from 'svelte';
	import { ZodError } from 'zod';

	let isClose: boolean;
	$: console.log('Show doctor modal', isClose);

	let specialitySelected: string;
	let genderSelected: string;

	let doctorCode = 1234;
	let key: string;
	masterKey.subscribe((value) => {
		key = value;
	});

	let token: string;
	masterToken.subscribe((value) => (token = value));

	const { doctor, errors, messages, cleanAll, cleanError, cleanMessage } = useRegisterForm();

	const handleSubmit = async () => {
		console.log('click');

		if (doctorCode === 1234) {
			const resp = await fetch(`/api/patients/read?id=${key}&token=${token}`);
			const js = await resp.json();
			const { id, firstName, lastName, email } = js;

			doctor.lastName = lastName;
			doctor.name = firstName;
			doctor.email = email;
			doctor.speciality = specialitySelected;
			doctor.id = id;
			doctor.gender = genderSelected;

			try {
				const result = doctorSchema.parse(doctor);
				console.log(result);

				await fetch('/api/doctors/create', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(result)
				});

				await fetch('/api/group/add', {
					method: 'POST',
					body: JSON.stringify({
						token: token,
						idUser: id,
						groupName: 'doctor'
					})
				});

				cleanAll();
				isClose = false;
				goto(`/doctor/${id}`);
			} catch (error) {
				cleanError(errors);
				cleanMessage(messages);
				if (error instanceof ZodError) {
					console.log(error);

					error.issues.forEach((err) => {
						errors[err.path[0] as keyof typeof errors] = true;
						messages[err.path[0] as keyof typeof messages] = err.message;
					});
					console.log(errors);
					console.log(messages);
				}
			}
		}
	};

	let specialities: Speciality[] = [];
	onMount(async () => {
		const resp = await fetch('/api/specialities');
		const js = await resp.json();
		specialities = js;
		console.log('hello');
		return () => {
			console.log('unmounted');
		};
	});
</script>

<input type="checkbox" id="doctor" class="modal-toggle" bind:checked={isClose} />
<div class="modal">
	<div class="modal-box">
		<form on:submit={handleSubmit}>
			<h3 class="font-bold text-lg">Register Form</h3>
			<div class="form">
				<div class="form-element">
					<label class="label" for="test">
						<span class="label-text">Speciality</span>
					</label>
					<select
						id="test"
						class="select select-bordered w-full max-w-xs"
						class:select-error={errors.speciality}
						bind:value={specialitySelected}
					>
						<option disabled selected>Pick one</option>
						{#each specialities as { id, name } (id)}
							<option value={id}>{name}</option>
						{/each}
					</select>
					{#if errors.speciality}
						<label for="description" class="label">
							<span class="label-text-alt text-red-500">{messages.speciality}</span>
						</label>
					{/if}
				</div>
				<div class="form-element">
					<label class="label" for="cellphone">
						<span class="label-text">Cellphone</span>
					</label>
					<input
						type="text"
						id="cellphone"
						placeholder="Enter your cellphone"
						class="input input-bordered w-full max-w-xs"
						class:input-error={errors.cellphone}
						bind:value={doctor.cellphone}
					/>
					{#if errors.cellphone}
						<label for="description" class="label">
							<span class="label-text-alt text-red-500">{messages.cellphone}</span>
						</label>
					{/if}
				</div>
				<div class="form-element">
					<label class="label" for="ci">
						<span class="label-text">CI</span>
					</label>
					<input
						type="text"
						id="ci"
						placeholder="Enter your CI"
						class="input input-bordered w-full max-w-xs"
						class:input-error={errors.ci}
						bind:value={doctor.ci}
					/>
					{#if errors.ci}
						<label for="description" class="label">
							<span class="label-text-alt text-red-500">{messages.ci}</span>
						</label>
					{/if}
				</div>
				<div class="form-element">
					<label class="label" for="gender">
						<span class="label-text">Gender</span>
					</label>
					<select
						id="gender"
						class="select select-bordered w-full max-w-xs"
						class:select-error={errors.gender}
						bind:value={genderSelected}
					>
						<option disabled selected>Select your gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>

					{#if errors.gender}
						<label for="description" class="label">
							<span class="label-text-alt text-red-500">{messages.gender}</span>
						</label>
					{/if}
				</div>
				<div class="form-element">
					<label class="label" for="doctor-code">
						<span class="label-text">Acess code</span>
					</label>
					<input
						type="password"
						id="doctor-code"
						placeholder="doctor-code"
						class="input input-bordered w-full max-w-xs"
						bind:value={doctorCode}
					/>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="modal-action">
					<button type="submit" class="btn btn-primary">Register</button>
					<label for="doctor" class="btn btn-primary">Cancel</label>
				</div>
			</div>
		</form>
	</div>
</div>
