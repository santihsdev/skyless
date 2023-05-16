<script>
  import { browser } from '$app/environment';
  import { Auth } from '$lib/ts/keycloak';
  export let data;

  const { isLogged } = data;

  console.log(isLogged);

</script>

<slot />
