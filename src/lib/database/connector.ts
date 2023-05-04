import { Client } from 'pg';
const client = new Client({
	user: 'keycloak',
	host: 'localhost',
	database: 'keycloak',
	password: 'password',
	port: 5432
});

client.connect((err) => {
	if (err) {
		console.error('connection error', err.stack);
	} else {
		console.log('connected');
	}
});

interface Reminder {
	id_appointment: number;
	date: string;
	hour: string;
	description: string;
	id_doctor: number;
	id_user: number;
}

export { client, type Reminder };
