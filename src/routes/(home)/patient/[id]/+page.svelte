<script lang="ts">
	import HomePatient from '$lib/components/HomePatient.svelte';
	import Register from '$lib/components/Register.svelte';
	import { masterToken, masterKey } from '$lib/stores/store';

	// let token = 'patient';
	// let key: string | undefined;
	// masterKey.subscribe((value: string) => (key = value));
	// masterToken.subscribe((value) => (token = value));
</script>

<HomePatient />
