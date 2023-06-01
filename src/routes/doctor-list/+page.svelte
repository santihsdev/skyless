<script lang="ts">
	import DoctorList from '$lib/components/DoctorList.svelte';
	import type { Speciality } from '$lib/types/speciality';
	import { onMount } from 'svelte';
	import Searcher from '$lib/components/Searcher.svelte';
	import { isSearch } from '$lib/stores/store';

	let specilities: Speciality[] = [];
	let actualIsSearch: boolean;

	onMount(async () => {
		const resp = await fetch('/api/specialities');
		const js: Speciality[] = await resp.json();
		specilities = js;
	});

	isSearch.subscribe((actual) => {
			actualIsSearch = actual;
	});
</script>

<Searcher/>

<div class="flex flex-col min-h-screen">
	{#if !actualIsSearch}
		{#each specilities as { id, name } (id)}
			<DoctorList
				isOpen={true}
				specialityName={name}
				specialityPath={`/api/doctors/speciality?id=${id}`}
			/>
		{/each}
	{/if}
</div>