<script>
	import Homepatient from "$lib/components/Homepatient.svelte";
	let token ="patient"
</script>

{#if token.length != 0}
<Homepatient/>
{/if}

