import { render, screen, waitFor } from '@testing-library/svelte';
import RowTableReminder from '../../../src/lib/components/RowTableReminder.svelte';

describe('Test to prove API', () => {
	test('should return 200', async () => {
		render(RowTableReminder);

		expect(await screen.getByText('Default')).toBeDefined();
		screen.debug()
	});
});
