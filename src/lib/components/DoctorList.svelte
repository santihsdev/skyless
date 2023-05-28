<script lang="ts">
	import { onMount } from 'svelte';
	import DoctorCard from './DoctorCard.svelte';
	import type { Doctor } from '$lib/types/doctor';

	export let specialityName: string = 'Default';
	export let specialityPath: string = '';
	export let isOpen: boolean = false;
	export let doctors: Doctor[] = [];
	onMount(async () => {
		let resp = await fetch(`${specialityPath}`);
		doctors = await resp.json();
		console.log(doctors);
	});

	const changeState = () => {
		isOpen = !isOpen;
	};
</script>

<div class="container mx-auto pt-16 pl-12 pr-20 sm:ml-64">
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow">
		<input type="checkbox" bind:checked={isOpen} />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="collapse-title text-xl font-medium" on:click={changeState}>
			<h1 class="text-4xl font-bold">{specialityName}</h1>
		</div>
		<div class="collapse-content">
			<!-- <DoctorCard /> -->
			{#each doctors as { id, name, lastName, cellphone, speciality } (id)}
				<DoctorCard {name} {lastName} {cellphone} {speciality} {id} />
			{/each}
		</div>
	</div>
</div>
