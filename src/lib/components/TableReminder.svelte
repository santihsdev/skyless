<script lang="ts">
	import RowTableReservation from '$lib/components/RowTableReminder.svelte';
	import type { Reminder } from '$lib/types/reminder';
	import { onMount } from 'svelte';

	let reminders: Reminder[] = [];
	onMount(async () => {
		reminders = await fetch(`/api/appoinments/get-all?key=${localStorage.getItem('key')}`).then(
			(item) => item.json()
		);
	});
</script>

<div class="sm:block pt-16 pb-0 pl-64">
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
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
					<RowTableReservation
						{id_appointment}
						{date}
						{description}
						{hour}
						idDoctor={id_doctor}
						idUser={id_user}
					/>
				{/each}
			</tbody>
		</table>
	</div>
</div>
