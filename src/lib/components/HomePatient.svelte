<script>
	import ArrowStick from '../../icons/ArrowStick.svelte';
	import medicinageneral from '$lib/images/especialidades/medicinageneral.png';
	import pediatria from '$lib/images/especialidades/pediatria.png';
	import odontologia from '$lib/images/especialidades/odontologia.png';
	import urologia from '$lib/images/especialidades/urologia.png';
	import obstetriciayginecologia from '$lib/images/especialidades/obstetriciayginecologia.png';
	import oftalmologia from '$lib/images/especialidades/oftalmologia.png';
	import traumatologia from '$lib/images/especialidades/traumatologia.png';
	import otorrinolaringologia from '$lib/images/especialidades/otorrinolaringologia.png';
	import cirugiaplastica from '$lib/images/especialidades/cirugiaplastica.png';

	import specialities from '$lib/data/specialities.json';
	import Register from './Register.svelte';

	const items = [
		medicinageneral,
		pediatria,
		odontologia,
		urologia,
		obstetriciayginecologia,
		oftalmologia,
		traumatologia,
		otorrinolaringologia,
		cirugiaplastica
	];
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-20 sm:ml-64">
	{#each specialities as { Speciality, Description, Path }, index}
		<div
			aria-posinset={index + 1}
			aria-setsize={specialities.length}
			class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<a href="#">
				<img class="h-auto max-w-full rounded-lg" src={items[index]} alt={Path} />
			</a>
			<div class="p-5">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{Speciality}
					</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{Description}</p>
				<a
					href="#"
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					See more
					<ArrowStick />
				</a>
			</div>
		</div>
	{/each}
	<!-- The button to open modal -->
	<label for="my-modal" class="btn">open modal</label>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<div class="modal">
		<div class="modal-box">
			<Register />
		</div>
	</div>
</div>
