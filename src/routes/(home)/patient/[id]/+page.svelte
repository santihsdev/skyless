<script>
	import HomePatient from "$lib/components/HomePatient.svelte";
	let token ="patient"
</script>

{#if token.length != 0}
<HomePatient/>
{/if}

