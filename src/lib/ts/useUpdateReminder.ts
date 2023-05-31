import { storeReminders } from '$lib/stores/store';
import type { Reminder } from '$lib/types/reminder';

export const updateReminders = async (id_user: string) => {
	const reminders: Reminder[] = await fetch(`/api/appoinments/get-all?key=${id_user}`).then(
		(item) => item.json()
	);
	storeReminders.set(reminders);
};
