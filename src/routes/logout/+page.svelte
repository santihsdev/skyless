<script>
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { masterKey, masterToken } from '$lib/stores/store';
	onMount(async () => {
		const token = Cookies.get('token');
		const key = Cookies.get('key');
		const resp = await fetch('/api/patients/logout', {
			method: 'POST',
			body: JSON.stringify({
				token,
				idUser: key
			})
		});
		Cookies.remove('token');
		Cookies.remove('key');
		if (browser) {
			localStorage.removeItem('key');
			localStorage.removeItem('token');
		}
		masterKey.update((value) => (value = 'key-default'));
		masterToken.update((value) => (value = 'token-default'));
		goto('/doctor-list');
	});
</script>

<h1>Login</h1>
