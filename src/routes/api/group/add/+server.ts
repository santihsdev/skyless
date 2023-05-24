import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

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

export const POST: RequestHandler = async ({ request }) => {
	const { token, idUser, groupName } = await request.json();

	const groupId = await getGroupId(groupName, token);

	const resp = await fetch(
		`http://0.0.0.0:8080/admin/realms/test/users/${idUser}/groups/${groupId}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`
			}
		}
	);

	if (resp.status == 204) {
		return json({ hello: 'world' });
	}
	throw error(401, 'Unauthorized');
};
