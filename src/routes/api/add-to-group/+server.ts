import { json } from '@sveltejs/kit';

const getGroupId = async (group: string, token: string): Promise<number> => {
	const resp = await fetch(`http://0.0.0.0:8080/admin/realms/test/groups?search=${group}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Bearer ${token}`
		}
	});
	const result: any[] = await resp.json();

	const { id } = result[0];
	return id;
};

/** @type {import('./$types').RequestHandler} */
export const POST = async ({ request }) => {
	const { token, idUser, groupName } = await request.json();

	const groupId = await getGroupId(groupName, token);
	const resp = await fetch(
		`http://0.0.0.0:8080/admin/realms/test/users/${idUser}/groups/${groupId}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Bearer ${token}`
			}
		}
	);
	const result = await resp.json();

	console.log(result);

	return json({ hello: 'world' });
};
