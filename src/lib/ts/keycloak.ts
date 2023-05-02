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
		});

		console.log(resp);

		console.log(this.client.tokenParsed);
		console.log(this.client.subject);
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
