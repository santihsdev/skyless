import { cleanup, render, screen } from '@testing-library/svelte';
import DoctorCard from '../../../src/lib/components/DoctorCard.svelte';


describe('DoctorCard component', () => {
	it('should render the correct title', () => {
		const { getByText } = render(DoctorCard, {
			props: {
				name: 'John',
				lastName: 'Doe'
			}
		});

		expect(getByText('John Doe')).toBeTruthy();
	});

    it('should render the correct link', () => {
        const { getByText, getByTestId } = render(DoctorCard, {
            props: {
                cellphone: '123-456-7890'
            }
        });
        expect(getByText('123-456-7890')).toBeTruthy();
    });
    it('should render the correct link', () => {
        const { getByText} = render(DoctorCard);
    
        expect(getByText('More information')).toBeTruthy();
    });
});



