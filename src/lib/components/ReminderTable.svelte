<script lang="ts">
	import ReminderElement from '$lib/components/ReminderElement.svelte';
	import { storeReminders } from '$lib/stores/store';
	import type { Reminder } from '$lib/types/reminder';
	import { onMount } from 'svelte';

	let reminders: Reminder[] = [];
	storeReminders.subscribe((value) => (reminders = value));

	onMount(async () => {
		reminders = await fetch(`/api/appoinments/get-all?key=${localStorage.getItem('key')}`).then(
			(item) => item.json()
		);
		storeReminders.set(reminders);
		console.log(reminders);
	});
</script>

<div class="sm:block pt-16 pb-0 pl-64">
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
			{#if reminders.length !== 0}
				<!-- head -->
				<thead>
					<tr>
						<th />
						<th>Doctor</th>
						<th>Date</th>
						<th>Description</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each reminders as { date, description, id_doctor, id_user, hour, id_appointment } (id_appointment)}
						<ReminderElement
							{id_appointment}
							{date}
							{description}
							{hour}
							idDoctor={id_doctor}
							idUser={id_user}
						/>
					{/each}
				</tbody>
			{:else}
				<div class="hero min-h-screen bg-base-100">
					<div class="hero-content text-center">
						<div class="max-w-md">
							<h1 class="text-5xl font-bold">There is no appoinments</h1>
							<p class="py-6">
								Your reminders are visible here, if you need some service, consider booking an
								appointment with our doctors
							</p>
							<a class="btn btn-primary" href="/doctor-list">View all the doctors</a>
						</div>
					</div>
				</div>
			{/if}
		</table>
	</div>
</div>
