<script>
	import MenuLeftReservation from '$lib/components/MenuLeftReservation.svelte';
	import RowTableReservation from '$lib/components/RowTableReservation.svelte';
</script>

<div class="sm:flex">
	<MenuLeftReservation />

	<div class="sm:block">
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
					<!-- row 1 -->
					<RowTableReservation />
					<!-- row 2 -->
					<RowTableReservation />
					<!-- row 3 -->
					<RowTableReservation />
					<!-- row 4 -->
					<RowTableReservation />
					<!-- foot -->
				</tbody>
			</table>
		</div>
	</div>
</div>
