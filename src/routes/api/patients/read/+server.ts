import { json, error } from '@sveltejs/kit';



export type Client = {
    email?: string;
    firstName: string;
    lastName: string;
    username?: string;
};



/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    const id = url.searchParams.get('id') ?? 0;
    const token = url.searchParams.get('token') ?? 0;

    const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`
        }
    });



    console.log(resp.status);
    const result = await resp.json();
    if (resp.status == 200) {
        return json({ ...result });
    }
    throw error(resp.status, 'Error');
}