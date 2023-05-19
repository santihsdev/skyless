import { Auth } from '$lib/ts/keycloak';
import { writable } from 'svelte/store';

export const masterKey = writable('key-default');
export const classAuth = writable();
export const masterToken = writable('token-default');
