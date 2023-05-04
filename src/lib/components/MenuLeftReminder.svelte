<script>
	import CalendarIcon from "../../icons/CalendarIcon.svelte";
import ChatIcon from "../../icons/ChatIcon.svelte";

</script>
<div>
	<ul class="menu bg-base-100 w-56 p-2 rounded-box">
		<li>
			<a>
				<ChatIcon/>
				Chat
			</a>
		</li>
		<li>
			<a class="active">
				<CalendarIcon/>
				Dates
			</a>
		</li>
	</ul>
</div>
