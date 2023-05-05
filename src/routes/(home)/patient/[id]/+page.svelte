<script lang="ts">
	import Homepatient from '$lib/components/Homepatient.svelte';
	import Register from '$lib/components/Register.svelte';
	import { authToken, masterKey } from '$lib/stores/store';
	import type { Auth } from '$lib/ts/keycloak';

	let token = 'patient';
	let key: string | undefined;
	masterKey.subscribe((value: string) => (key = value));
	authToken.subscribe((value: Auth) => {
		key = value.getClient().token;
	});
</script>

{#if token !== undefined}
	<Homepatient />
	<Register />
{/if}
