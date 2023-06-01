<script lang="ts">
    import type { Doctor } from '$lib/types/doctor';
    import SearchIcon from '../../icons/SearchIcon.svelte';
    import DoctorList from '$lib/components/DoctorList.svelte';
    import { isSearch } from '$lib/stores/store';

    let nameDoctor = '';
	let doctors: Doctor[] = [];
	let inputElement: HTMLInputElement;
    let actualIsSearch: boolean;

    const searchDoctor = async () => {
		actualIsSearch = nameDoctor === '' ? false : true;
        isSearch.set(actualIsSearch);

		const resp = await fetch(`/api/doctors/search?name=${nameDoctor}`);
		const json: Doctor[] = await resp.json();

		doctors = json;
		inputElement.focus();
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
				autocomplete="off"
				required
				bind:value={nameDoctor}
				bind:this={inputElement}
			/>

			<button
				type="submit"
				class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				on:click={searchDoctor}>Search</button
			>
		</div>
	</form>
</div>

{#if actualIsSearch}
	<div>
		<DoctorList isOpen={true} specialityName={`Results for: "${nameDoctor}"`} {doctors} />
	</div>
{/if}