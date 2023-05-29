<script lang="ts">
	import ScheduleFormClientMedic from '$lib/components/ScheduleFormClientMedic.svelte';

	export let id: string = '';
	export let name: string = 'Default';
	export let lastName: string = '';
	export let speciality: string = 'Speciality';
	export let cellphone: string = '000000000';
</script>

<div class="card lg:card-side bg-base-100 shadow-xl mb-4">
	<figure>
		<div class="avatar">
			<div class="w-24 rounded">
				<img src="./src/lib/images/default.png" alt="default" />
			</div>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name} {lastName}</h2>
		<p>
			<b>Specialities:</b>
			{speciality}
		</p>
		<div>
			<a class="link link-hover link-info" href="/doctor-profile">More information</a>
			<br />
			<a class="link link-hover link-info"><i class="bi bi-telephone-fill" />{cellphone}</a>
			<br />
			<label for={`my-modal-${id}`} class="btn">schedule now</label>
			<ScheduleFormClientMedic {id} />
		</div>
	</div>
</div>
