<script>
	import ChatIcon from '../../icons/ChatIcon.svelte';
	import CalendarIcon from '../../icons/CalendarIcon.svelte';
	import Register from './Register.svelte';
</script>

<aside
	id="logo-sidebar"
	class="fixed top-0 left-0 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
	aria-label="Sidebar"
>
	<div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
		<ul class="space-y-2 font-medium">
			<li class="disabled">
				<a
					href="#"
					class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<ChatIcon />
					<span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
					<span
						class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
						>3</span
					>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<CalendarIcon />
					<span class="flex-1 ml-3 whitespace-nowrap">Calendar</span>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<span class="flex-1 ml-3 whitespace-nowrap">
						<!-- The button to open modal -->
						<label for="my-modal" class="btn btn-outline">Are you a doctor?</label>
					</span>
				</a>
			</li>
		</ul>
	</div>
</aside>
