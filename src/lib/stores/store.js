import { Auth } from '$lib/ts/keycloak';
import { writable } from 'svelte/store';

export const masterKey = writable("key-default");
export const authToken = writable();