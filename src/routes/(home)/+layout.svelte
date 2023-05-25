<script>
	import { browser } from '$app/environment';
	import { masterKey, masterToken, menuOpen } from '$lib/stores/store.js';
	import { Auth } from '$lib/ts/keycloak';
	export let data;

	const { isLogged } = data;

	if (browser) {
		const key = localStorage.getItem('key');
		const token = localStorage.getItem('token');
		console.log('key:', key);

		if (key != null && token != null) {
			masterKey.set(key ?? 'key-layout');
			masterToken.set(token ?? 'token-layout');
			menuOpen.set(true)
		}
	}
</script>

<slot />
