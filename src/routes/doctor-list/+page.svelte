<script lang="ts">
	import DoctorList from '$lib/components/DoctorList.svelte';
	import type { Speciality } from '$lib/types/speciality';
	import type { Doctor } from '$lib/types/doctor';
	import { onMount } from 'svelte';
	import SearchIcon from '../../icons/SearchIcon.svelte';

	let specilities: Speciality[] = [];
	onMount(async () => {
		const resp = await fetch('/api/specialities');
		const js: Speciality[] = await resp.json();
		specilities = js;
	});

	let nameDoctor = '';
	let isSearch = false;
	let doctors: Doctor[] = [];

	const searchDoctor = async () => {
		isSearch = nameDoctor === '' ? false : true;
		console.log('click');
		console.log(nameDoctor);

		const resp = await fetch(`/api/doctors/search?name=${nameDoctor}`);
		const json: Doctor[] = await resp.json();
		doctors = json;
		console.log(doctors);
	};
</script>

<div class="pt-20 pl-12 pr-20 sm:ml-64">
	<form>
		<label
			for="default-search"
			class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label
		>

		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<SearchIcon />
			</div>

			<input
				type="search"
				id="default-search"
				class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Search doctors"
				required
				bind:value={nameDoctor}
			/>

			<button
				type="submit"
				class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				on:click={searchDoctor}>Search</button
			>
		</div>
	</form>
</div>
<div class="flex flex-col min-h-screen">
	{#if isSearch}
		<div class="pt-8 pl-12 pr-20 sm:ml-64">
			<h1>you search: {nameDoctor}</h1>
			{#each doctors as { name }}
				<h1>{name}</h1>
			{/each}
		</div>
	{:else}
		{#each specilities as { id, name } (id)}
			<DoctorList isOpen={true} specialityName={name} speciliatyId={id} />
		{/each}
	{/if}
</div>
