<script lang="ts">
	import { onMount } from 'svelte';
	let isDone: boolean = false;
	export let idDoctor: number = 0;
	export let idUser: number = 0;
	export let date: string = '00/00/00';
	export let hour: string = '00:00';
	export let description: string = 'Default';
</script>

<tr class="hover" class:line-through={isDone}>
	<th>
		<label>
			<input type="checkbox" class="checkbox" bind:checked={isDone} />
		</label>
	</th>
	<td>
		<div class="flex items-center space-x-3">
			<div class="avatar">
				<div class="mask mask-squircle w-12 h-12">
					<img src="./src/lib/images/default.png" alt="Avatar Tailwind CSS Component" />
				</div>
			</div>
			<div>
				<div class="font-bold">{idDoctor} {nameDoctor}</div>
				<div class="text-sm opacity-50">{speciality}</div>
			</div>
		</div>
	</td>
	<td>
		{hour}
		<br />
		<span class="badge badge-ghost badge-sm">{date}</span>
	</td>
	<td>{description}</td>
	<th>
		<button class="my-button">Edit</button>
		<button class="delete-btn" on:click={() => deleteAppointment(idDoctor)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-trash"
				width="19"
				height="19"
				viewBox="0 0 24 24"
				stroke-width="5.5"
				stroke="#2c3e50"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" />
				<line x1="4" y1="7" x2="20" y2="7" />
				<line x1="10" y1="11" x2="10" y2="17" />
				<line x1="14" y1="11" x2="14" y2="17" />
				<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
				<path d="M9 4h6" />
			</svg>
		</button>
	</th>
</tr>


