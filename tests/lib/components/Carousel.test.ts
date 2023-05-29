import { render } from '@testing-library/svelte';
import Carousel from '../../../src/lib/components/Carousel.svelte';

describe('Carousel', () => {
	it('should be present on the page', () => {
		const { getByTestId } = render(Carousel);
		const carousel = getByTestId('carousel');
		expect(carousel).toBeTruthy();
	});

	it('should render one image per slide', () => {
		const { container } = render(Carousel);
		const images = container.querySelectorAll('img');
		expect(images.length).toBe(1);
	});
	it('should render navigational buttons', () => {
		const { getByRole } = render(Carousel);
		const prevButton = getByRole('button', { name: /Previous/i });
		const nextButton = getByRole('button', { name: /Next/i });

		expect(prevButton).toBeInTheDocument();
		expect(nextButton).toBeInTheDocument();
	});
});
