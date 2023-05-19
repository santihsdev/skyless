<script lang="ts">
	import ArrowDownIcon from '../../icons/ArrowDownIcon.svelte';
	import ArrowRightIcon from '../../icons/ArrowRightIcon.svelte';
	import LoginIcon from '../../icons/LoginIcon.svelte';
	import SearchIcon from '../../icons/SearchIcon.svelte';
	import ListIcon from '../../icons/ListIcon.svelte';
	import MedicalCheckLogo from '$lib/images/MedicalCheckLogo.png';
	import { masterKey } from '$lib/stores/store';

	let id: string;
	masterKey.subscribe((value) => (id = value));
	$: id;
</script>

<nav class="fixed top-0 z-59 w-full navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<ListIcon />
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li tabindex="0">
					<a class="justify-between" href="/doctor-list">
						View all doctors
					</a>
				</li>
				<li tabindex="0">
					<a class="justify-between">
						About us
					</a>
				</li>
			</ul>
		</div>
		<a href={id === "key-default" ? '/' : `/patient/${id}`}
			><img src={MedicalCheckLogo} width="200px" alt="" /></a
		>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal">
			<li tabindex="0">
				<a href="/doctor-list">
					View all doctors</a>
			</li>
			<li tabindex="0">
				<a>
					About us
				</a>
				
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		{#if id.length <= 11}
			<a class="btn btn-ghost" href="/login">
				<LoginIcon />
				&nbsp; Login
			</a>
		{:else}
			<a class="btn btn-ghost" href="/logout">
				<LoginIcon />
				&nbsp; Logout
			</a>
		{/if}
	</div>
</nav>
