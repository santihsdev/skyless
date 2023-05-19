<script>
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SideMenu from '$lib/components/SideMenu.svelte';
	import '../app.postcss';
</script>

<div class="flex flex-col min-h-screen">
	<header class="sticky top-0 z-50">
		<Header />
	</header>
	<SideMenu />

	<slot />

	<Footer />
</div>
