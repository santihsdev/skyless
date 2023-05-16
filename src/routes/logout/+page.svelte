<script>
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import { goto } from '$app/navigation';
	onMount(async () => {
		const token = Cookies.get('token');
		const key = Cookies.get('key');
		console.log(token, "token");
		const resp = await fetch('/api/patients/logout', {
			method: 'POST',
			body: JSON.stringify({
				token,
				idUser: key
			})
		});
		Cookies.remove('token');
		Cookies.remove('key');
		console.log('logout ', resp.status);
		goto('/doctor-list');
	});
</script>

<h1>Login</h1>
