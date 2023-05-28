import { render, screen } from '@testing-library/svelte';
import DoctorList from '../../../src/lib/components/DoctorList.svelte';

describe('Test to prove API', () => {
	test('should return 200', async () => {
		render(DoctorList);

		expect(screen.getByText('Default')).toBeDefined();
	});
});
