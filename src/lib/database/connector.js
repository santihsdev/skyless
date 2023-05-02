import { Client } from 'pg';
const client = new Client({
    user: 'keycloak',
    host: '172.18.0.2',
    database: 'postgres',
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

export {
    client
}