<script lang="ts">
	let isDone: boolean = false;
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
				<div class="font-bold">Dr. Marcus Ryan</div>
				<div class="text-sm opacity-50">Oncologist</div>
			</div>
		</div>
	</td>
	<td>
		{new Date()}
		<br />
		<span class="badge badge-ghost badge-sm">13/03/2023</span>
	</td>
	<td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, minus.</td>
	<th>
		<button class="btn btn-ghost btn-xs">details</button>
	</th>
</tr>
