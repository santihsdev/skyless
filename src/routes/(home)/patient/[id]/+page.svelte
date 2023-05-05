<script lang="ts">
	import Homepatient from "$lib/components/Homepatient.svelte";
	import Register from "$lib/components/Register.svelte";
	import { masterKey } from "$lib/stores/store";

	let token ="patient"
	let key:string;
	masterKey.subscribe((value: string) => key = value);
</script>
<h1>home paciente</h1>

<h1>{key}</h1>
{#if token !== "Not found"}
	<Homepatient/>
	<Register/>
{/if}

