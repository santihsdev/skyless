import { goto } from '$app/navigation';
import { masterKey } from '$lib/stores/store';
import Keycloak from 'keycloak-js';

export class Auth {
	private client: Keycloak;
	public constructor() {
		this.client = new Keycloak({
			clientId: 'client-test',
			realm: 'test',
			url: 'http://0.0.0.0:8080/'
		});
	}
	async tryLogin() {
		const resp = await this.client.init({
			onLoad: 'login-required',
			//redirectUri: 'http://localhost:5173/client/hello'
		});
		masterKey.set(this.client.subject??"Not found");
		goto(`http://localhost:5173/patient/${this.client.subject}`);
	}

	login(): void {
		this.tryLogin();
	}

	logout(): void {
		console.log(this.client.subject);

		this.client.logout();
	}

	getClient(): Keycloak {
		return this.client;
	}
}
