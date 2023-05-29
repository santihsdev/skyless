import { render, fireEvent } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import Carousel from '../../../src/lib/components/Carousel.svelte';

describe('Carousel', () => {
	it('should be present on the page', () => {
		const { getByTestId } = render(Carousel);
		const carousel = getByTestId('carousel');
		expect(carousel).toBeTruthy();
	});
});
