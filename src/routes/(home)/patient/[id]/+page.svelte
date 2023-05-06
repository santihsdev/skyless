<script lang="ts">
	import HomePatient from '$lib/components/HomePatient.svelte';
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

<HomePatient />
<Register />
