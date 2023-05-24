import { Client } from 'pg';
import {
	data_base_name,
	data_base_password,
	data_base_user,
	database_port
} from './database-variables';

const client = new Client({
	user: data_base_user,
	host: 'localhost',
	database: data_base_name,
	password: data_base_password,
	port: database_port
});

client.connect((err) => {
	if (err) {
		console.error('connection error', err.stack);
	} else {
		console.log('connected');
	}
});

export { client };
