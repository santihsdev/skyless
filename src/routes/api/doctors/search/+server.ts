import { client } from '$lib/database/connector';
import { doctor_table } from '$lib/database/database-variables';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '../$types';


export const GET: RequestHandler = async ({ url }: RequestEvent) => {
	const name = url.searchParams.get('name') ?? '0';

  console.log("servers: ",name);
  
	console.log("query: ", `SELECT name FROM ${doctor_table} WHERE name LIKE '%${name}%';`);

	//let doctors: Doctor[] = result.rows.map(
	const result = await client.query(
    `SELECT * FROM ${doctor_table} WHERE name LIKE '%${name}%';`
		//`SELECT name FROM ${doctor_table} WHERE name LIKE '$1';`, [`'%${name}%'`]
		//`SELECT * FROM ${doctor_table} where id='DOC001';`
	);
  console.log("Resulttttt",result);
		
	return json(result.rows);
};