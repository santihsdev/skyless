import { render, screen, waitFor } from '@testing-library/svelte';
import RemindereElement from '../../../src/lib/components/ReminderElement.svelte';

describe('Test to prove API', () => {
	test('should return 200', async () => {
		render(RemindereElement);

		expect(await screen.getByText('Default')).toBeDefined();
	});
});
