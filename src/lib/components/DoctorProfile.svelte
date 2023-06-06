<script>
	import BagIcon from '$lib/icons/BagIcon.svelte';
	import CardIcon from '$lib/icons/CardIcon.svelte';
	import ClockIcon from '$lib/icons/ClockIcon.svelte';
	import HatIcon from '$lib/icons/HatIcon.svelte';
	import PhoneIcon from '$lib/icons/PhoneIcon.svelte';
	import AppointmentForm from './AppointmentForm.svelte';
</script>

<div class="card lg:card-side bg-base-100 mb-4 pt-12 pb-0 pl-20 sm:ml-64">
	<figure>
		<div class="avatar">
			<div class="w-24 rounded">
				<img src="./src/lib/images/default.png" alt="default" />
			</div>
		</div>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Fady Khoury-Collado, MDS</h2>
		<p>
			<b>Specialities:</b> Lorem, adipisicing, Accusantium, reiciendis!
		</p>
		<div>
			<div class="sm:flex">
				<PhoneIcon />
				<p>212-395-3210</p>
			</div>
		</div>
	</div>
</div>

<div class="px-5 pl-72">
	<div class="sm:flex">
		<CardIcon />
		<h3 class="px-5 text-2xl font-bold">About Fady Khoury-Collado</h3>
	</div>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
</div>

<div class="sm:flex p-14 pl-72 justify-center">
	<div class="stats stats-vertical lg:stats-horizontal shadow">
		<div class="stat w-80">
			<div>
				<div class="sm:flex justify-center">
					<HatIcon />
				</div>
				<h3 class="px-5 text-xl font-bold text-center py-5">Education</h3>
				<p class="text-base">Fellowship: Memorial Sloan-Kettering Cancer Center</p>
				<p class="text-base">Internship: State University of New York - Downstate Medical Center</p>
				<p class="text-base">Residency: Lutheran Medical Center</p>
				<p class="text-base">Residency: Lutheran Medical Center</p>
			</div>
		</div>

		<div class="stat w-72">
			<div>
				<div class="sm:flex justify-center">
					<BagIcon />
				</div>
				<h3 class="text-xl font-bold py-5 text-center">Board certifications</h3>
				<p class="text-base">Ginecologic Oncology</p>
				<p class="text-base">Obstetrics and Gynecology</p>
			</div>
		</div>

		<div class="stat">
			<div class="sm:flex justify-center">
				<ClockIcon />
			</div>
			<h3 class="px-5 py-5 text-xl font-bold text-center">Doctor Office Hours</h3>
			<div class="overflow-x-auto">
				<table class="border-separate border-spacing-2">
					<tbody>
						<tr>
							<th class="text-left">Thursday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Friday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr><tr>
							<th class="text-left">Saturday</th>
							<td>Closed</td>
						</tr>
						<tr>
							<th class="text-left">Sunday</th>
							<td>Closed</td>
						</tr>
						<tr>
							<th class="text-left">Monday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Tuesday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
						<tr>
							<th class="text-left">Wednesday</th>
							<td>9:00 AM - 5:00 PM</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<AppointmentForm />
