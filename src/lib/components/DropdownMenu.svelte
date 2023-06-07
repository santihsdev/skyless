<script>
    import ListIcon from '../../icons/ListIcon.svelte';
</script>
<div class="dropdown">
	<label tabindex="0" class="btn btn-ghost lg:hidden">
		<ListIcon />
	</label>
	<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
		<li tabindex="0">
			<a class="justify-between" href="/doctor-list"> View all doctors </a>
		</li>
		<li tabindex="0">
			<a class="justify-between"> About us </a>
		</li>
	</ul>
</div>