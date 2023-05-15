<script>
  import { browser } from '$app/environment';
  import { Auth } from '$lib/ts/keycloak';
  export let data;

  const { isLogged } = data;

  if (browser) {
    if (!isLogged) {
      let auth = new Auth();
      auth.login();
    }
  }
</script>

<slot />
