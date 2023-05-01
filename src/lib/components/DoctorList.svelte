<script lang="ts">
	import DoctorCard from './DoctorCard.svelte';

	export let speciality: string = 'Default';
	export let isOpen: boolean = false;
</script>

<div class="container mx-auto p-2">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow">
		<input type="checkbox" bind:checked={isOpen} />
		<div class="collapse-title text-xl font-medium">
			<h1 class="text-4xl font-bold">{speciality}</h1>
		</div>
		<div class="collapse-content">
			<DoctorCard />
			<DoctorCard />
			<DoctorCard />
		</div>
	</div>
</div>
