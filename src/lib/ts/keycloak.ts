import { browser } from '$app/environment';
import { goto } from '$app/navigation';
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
			onLoad: 'login-required'
			//redirectUri: 'http://localhost:5173/client/hello'
		});

		if (browser) {
			localStorage.setItem('key', this.client.subject ?? 'from-keycloak');
			localStorage.setItem('token', this.client.token ?? 'from-keycloak');
		}
		const response = await fetch(
			`/api/group/read?id=${this.client.subject}&token=${this.client.token}`
		);
		const count = await response.json();

		if (count == 1) {
			await goto(`/patient/${this.client.subject}`);
		} else {
			await goto(`/doctor/${this.client.subject}`);
		}
	}

	login(): void {
		this.tryLogin();
	}

	async tryLogout(): Promise<void> {
		let data = this.client.createLogoutUrl();
		console.log(data);
	}

	logout(): void {
		console.log(this.client.subject);
		this.tryLogout();
	}

	getClient(): Keycloak {
		return this.client;
	}
}
