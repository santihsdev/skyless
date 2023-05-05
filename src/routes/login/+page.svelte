<script>
	import { onMount } from "svelte";
	import { Auth } from "$lib/ts/keycloak";
	import { authToken } from "$lib/stores/store";
    let auth;
    onMount( () => {
        auth = new Auth();
        auth.login();

        authToken.set(auth)
    }) 
</script>
<h1>Login</h1>