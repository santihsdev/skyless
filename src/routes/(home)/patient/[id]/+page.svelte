<script>
	import Homepatient from "$lib/components/Homepatient.svelte";
	let token ="patient"
</script>
<h1>home paciente</h1>


{#if token.length != 0}
<Homepatient/>
{/if}

