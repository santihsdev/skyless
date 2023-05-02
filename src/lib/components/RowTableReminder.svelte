<script lang="ts">
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
				<div class="font-bold">{idDoctor} Dr. Marcus Ryan</div>
				<div class="text-sm opacity-50">Oncologist</div>
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
		<button class="btn btn-ghost btn-xs" disabled={isDone} >details</button>
	</th>
</tr>
