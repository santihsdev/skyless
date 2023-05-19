<script>
	import { onMount } from 'svelte';
	import { Auth } from '$lib/ts/keycloak';
	let auth;
	onMount(() => {
		auth = new Auth();
		auth.login();
	});
</script>

<h1>Login</h1>
