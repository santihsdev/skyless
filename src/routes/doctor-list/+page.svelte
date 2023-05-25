<script lang="ts">
	import DoctorList from '$lib/components/DoctorList.svelte';
	import type { Speciality } from '$lib/types/speciality';
	import { onMount } from 'svelte';

	let specilities: Speciality[] = [];
	onMount(async () => {
		const resp = await fetch('/api/specialities');
		const js: Speciality[] = await resp.json();
		specilities = js;
	});
</script>

<div class="flex flex-col min-h-screen">
	{#each specilities as { id, name } (id)}
		<DoctorList isOpen={true} specialityName={name} speciliatyId={id} />
	{/each}
</div>
