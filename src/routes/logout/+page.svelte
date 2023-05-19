<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { masterKey, masterToken } from '$lib/stores/store';
	onMount(async () => {
		if (browser) {
			const token = localStorage.getItem('token');
			const key = localStorage.getItem('key');
			const resp = await fetch('/api/patients/logout', {
				method: 'POST',
				body: JSON.stringify({
					token,
					idUser: key
				})
			});
			localStorage.removeItem('key');
			localStorage.removeItem('token');
			masterKey.update((value) => (value = 'key-default'));
			masterToken.update((value) => (value = 'token-default'));
			goto('/doctor-list');
		}
	});
</script>

<h1>Login</h1>
