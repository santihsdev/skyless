<script>
	import { onMount } from "svelte";
	import Login from "../../lib/components/Login.svelte";
	import { Auth } from "$lib/ts/keycloak";
    let auth;
    onMount( () => {
        auth = new Auth;
        auth.login();
    }) 
</script>
<h1>Login</h1>
<Login/>