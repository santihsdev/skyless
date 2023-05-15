<script lang="ts">
	import HomePatient from '$lib/components/HomePatient.svelte';
	import Cookie from 'js-cookie';
	import Register from '$lib/components/Register.svelte';
	import { masterToken, masterKey } from '$lib/stores/store';
	import { browser } from '$app/environment';

	let token = 'patient';
	let key: string | undefined;
	masterKey.subscribe((value: string) => (key = value));
	masterToken.subscribe((value) => (token = value));

	let myKey = '',
		myToken = '';
	if (browser) {
		myKey = localStorage.getItem('key') ?? '';
		myToken = localStorage.getItem('token') ?? '';
	}

	console.log('key', myKey, myToken);

	if (myKey?.length != 0 || myToken?.length != 0) {
		Cookie.set('key', myKey ?? '');
		Cookie.set('token', myToken ?? '');
	}
	if (browser) {
		localStorage.removeItem('key');
		localStorage.removeItem('token');
	}
</script>

<HomePatient />
<Register />
