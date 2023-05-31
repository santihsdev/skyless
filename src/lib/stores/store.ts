import { Auth } from '$lib/ts/keycloak';
import type { Reminder } from '$lib/types/reminder';
import { writable } from 'svelte/store';

export const masterKey = writable('key-default');
export const classAuth = writable();
export const masterToken = writable('token-default');
export const menuOpen = writable(false);
export const areYouDoctor = writable(false);
export const storeReminders = writable<Reminder[]>([]);
