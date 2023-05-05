<script lang="ts">
	import { onMount } from 'svelte';
	import DoctorCard from './DoctorCard.svelte';
	import type { Doctor } from '../../routes/api/doctors/+server';

	export let speciality: string = 'Default';
	export let isOpen: boolean = false;
	let doctors: Doctor[] = [];
	onMount(async () => {
		let resp = await fetch('/api/doctors');
		doctors = await resp.json();
	});
</script>

<div class="container mx-auto py-20 pl-12 pr-20 sm:ml-64">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow">
		<input type="checkbox" bind:checked={isOpen} />
		<div class="collapse-title text-xl font-medium">
			<h1 class="text-4xl font-bold">{speciality}</h1>
		</div>
		<div class="collapse-content">
			<!-- <DoctorCard /> -->
			{#each doctors as { id, name, lastName, cellphone, speciality } (id)}
				<DoctorCard {name} {lastName} {cellphone} {speciality} {id} />
			{/each}
		</div>
	</div>
</div>
