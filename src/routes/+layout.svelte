<script>
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SideMenu from '$lib/components/SideMenu.svelte';
	import Cookies from 'js-cookie';
	import '../app.postcss';
	import { masterKey, masterToken } from '$lib/stores/store';

	if (browser) {
		const key = localStorage.getItem('key');
		const token = localStorage.getItem('token');

		if (key != null && token != null) {
			Cookies.set('key', key ?? '');
			Cookies.set('token', token ?? '');

			masterKey.set(Cookies.get('key') ?? 'key-layout');
			masterToken.set(Cookies.get('token') ?? 'token-layout');
		}

		localStorage.removeItem('key');
		localStorage.removeItem('token');
	}
</script>

<header class="sticky top-0 z-50">
	<Header />
</header>

<SideMenu />

<slot />
<footer>
	<Footer />
</footer>
