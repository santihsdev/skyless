<script>
	import { onMount } from "svelte";
	import Login from "../../lib/components/Login.svelte";
	import { Auth } from "$lib/ts/keycloak";
	import { authToken } from "$lib/stores/store";
    let auth;
    onMount( () => {
        auth = new Auth;
        auth.login();

        authToken.set(auth)
    }) 
</script>
<h1>Login</h1>
<Login/>