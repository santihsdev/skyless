<script lang="ts">
	import { onMount } from 'svelte';
	import ReminderForm from './ReminderForm.svelte';
	import avatar from '$lib/images/default.png';
	import { updateReminders } from '$lib/ts/useUpdateReminder';
  
	export let idDoctor = '0';
	export let idUser = '0';
	export let date = '01-01-00';
	export let hour = '00:00';
	export let description = 'Default';
	export let id_appointment = 0;
  
	let isDone = false;
	let nameDoctor = '';
	let speciality = '';
	let formatedDate = new Date(date).toISOString().split('T')[0];
	let formatedHour = hour.slice(0, 5);
	let isVisibleForm = false;
	let isConfirmationModalVisible = false;
  
	async function deleteAppointment(id_appointment: number) {
	  const response = await fetch('/api/appoinments/delete', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		  id_appointment
		})
	  });
  
	  updateReminders(idUser);
  
	  return response.json();
	}
  
	function handleShowForm() {
	  console.log('click');
	  isVisibleForm = !isVisibleForm;
	}
  
	onMount(async () => {
	  const resp = await fetch(`/api/doctors/read?id=${idDoctor}`);
	  const { name, speciality: doctorSpeciality } = await resp.json();
	  nameDoctor = name;
	  speciality = doctorSpeciality;
	});
  </script>
  
  
<tr class="hover" class:line-through={isDone}>
	<th>
		<label>
			<input type="checkbox" class="checkbox" bind:checked={isDone} />
		</label>
	</th>
	<td>
		<div class="flex items-center space-x-3">
			<div class="avatar">
				<div class="mask mask-squircle w-12 h-12">
					<img src={avatar} alt="Avatar Tailwind CSS Component" />
				</div>
			</div>
			<div>
				<div class="font-bold">{nameDoctor}</div>
				<div class="text-sm opacity-50">{speciality}</div>
			</div>
		</div>
	</td>
	<td>
		{hour.slice(0, 5)}
		{parseInt(hour.split(':')[0]) > 12 ? 'p.m.' : 'a.m.'}
		<br />
		<span class="badge badge-ghost badge-sm">{new Date(date).toISOString().split('T')[0]}</span>
	</td>
	<td>{description}</td>
	<th>
		<button class="btn btn-primary" on:click={handleShowForm}>Edit</button>
		<button class=" delete-btn" on:click={() => (isConfirmationModalVisible = true)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-trash"
				width="19"
				height="19"
				viewBox="0 0 24 24"
				stroke-width="5.5"
				stroke="#2c3e50"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<line x1="4" y1="7" x2="20" y2="7" />
				<line x1="10" y1="11" x2="10" y2="17" />
				<line x1="14" y1="11" x2="14" y2="17" />
				<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
				<path d="M9 4h6" />
			</svg>
		</button>
	</th>
	{#if isVisibleForm}
		<ReminderForm
			isEdit={true}
			id={id_appointment + ''}
			isVisible={isVisibleForm}
			appointmentForm={{
				date: formatedDate,
				hour: formatedHour,
				description: description,
				id_doctor: idDoctor,
				id_user: idUser
			}}
		/>
	{/if}
	{#if isConfirmationModalVisible}
		<div
			class="fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div
					class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				/>
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
					>&#8203;</span
				>
				<div
					class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
									Confirmar eliminación
								</h3>
								<div class="mt-2">
									<p class="text-sm text-gray-500">
										¿Estás seguro de que quieres eliminar esta cita?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							class="btn btn-primary"
							style="margin-left: 3%;"
							on:click={() => {
								deleteAppointment(id_appointment);
								isConfirmationModalVisible = false;
							}}
						>
							Confirmar
						</button>
						<button
							type="button"
							class="btn btn-primary"
							on:click={() => {
								isConfirmationModalVisible = false;
							}}
						>
							Cancelar
						</button>
					</div>
				</div>
			</div>
		</div>
	{/if}
</tr>

<style>
	.my-button {
		background-color: #79ccd1;
		border-radius: 8px;
		border: none;
		color: white;
		font-size: 1rem;
		padding: 10px 20px;
		height: 42px;
		width: 90px;
		text-align: center;
		cursor: pointer;
	}

	.my-button:hover {
		background-color: #2ca2d8;
	}
	.my-button:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(74, 134, 232, 0.6);
	}

	.delete-btn {
		background-color: #e74c3c;
		position: relative;
		top: 4px;
		color: white;
		border: none;
		border-radius: 5px;
		padding: 15px 20px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s ease;
	}

	.delete-btn:hover {
		background-color: #c0392b;
	}
</style>
