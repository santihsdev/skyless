<script lang="ts">
	import { onMount } from 'svelte';
	import ScheduleFormClientMedic from './ScheduleFormClientMedic.svelte';
	import avatar from '$lib/images/default.png';
	let isDone: boolean = false;
	export let idDoctor: string = '0';
	export let idUser: string = '0';
	export let date: string = '01-01-00';
	export let hour: string = '00:00';
	export let description: string = 'Default';
	export let id_appointment: number = 0;

	let nameDoctor: string;
	let speciality: string;

	let formatedDate: string = new Date(date).toISOString().split('T')[0];
	let formatedHour = hour.slice(0, 5);

	let isVisibleForm: boolean;
	$: isVisibleForm;

	async function deleteAppointment(id_appointment: number) {
		const response = await fetch('/api/appoinments/delete', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id_appointment: id_appointment
			})
		});

		return response.json();
	}

	const handleShowForm = () => {
		console.log('click');
		isVisibleForm = !isVisibleForm;
	};

	onMount(async () => {
		const resp = await fetch(`/api/doctors/read?id=${idDoctor}`);
		const js = await resp.json();
		nameDoctor = js.name;
		speciality = js.speciality;
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
		{hour}
		<br />
		<span class="badge badge-ghost badge-sm">{date}</span>
	</td>
	<td>{description}</td>
	<th>
		<button class="my-button" on:click={handleShowForm}>Edit</button>
		<button class="delete-btn" on:click={() => deleteAppointment(id_appointment)}>
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
		<ScheduleFormClientMedic
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
		color: white;
		border: none;
		border-radius: 2px;
		padding: 8px 12px;
		box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
		transition: background-color 0.3s ease;
	}

	.delete-btn:hover {
		background-color: #c0392b;
	}
</style>
