import { cleanup, render, screen } from '@testing-library/svelte';
import DoctorProfile from '$lib/components/DoctorProfile.svelte';
import BagIcon from '../../../src/icons/BagIcon.svelte';
import CardIcon from '../../../src/icons/CardIcon.svelte';
import ClockIcon from '../../../src/icons/ClockIcon.svelte';
import HatIcon from '../../../src/icons/HatIcon.svelte';
import PhoneIcon from '../../../src/icons/PhoneIcon.svelte';

describe('Text components', () => {
	afterEach(() => {
		cleanup();
	});

	test('renders text from Contact us column', () => {
		render(DoctorProfile);

		//expect(screen.getByText('Specialities:')).toBeDefined();
		//expect(screen.getByText('About')).toBeDefined();
		expect(screen.getByText('Education')).toBeDefined();
		expect(screen.getByText('Board certifications')).toBeDefined();
		expect(screen.getByText('Doctor Office Hours')).toBeDefined();
		expect(screen.getByText('Schedule an appointment')).toBeDefined();
		expect(screen.getByText('Fecha:')).toBeDefined();
		expect(screen.getByText('Hora:')).toBeDefined();
		expect(screen.getByText('Descripción:')).toBeDefined();
		expect(screen.getByText('Schedule')).toBeDefined();
	});

	test('renders text from Doctor Office Hours column', () => {
		render(DoctorProfile);

		expect(screen.getByText('Thursday')).toBeDefined();
		expect(screen.getByText('Friday')).toBeDefined();
		expect(screen.getByText('Saturday')).toBeDefined();
		expect(screen.getByText('Sunday')).toBeDefined();
		expect(screen.getByText('Monday')).toBeDefined();
		expect(screen.getByText('Tuesday')).toBeDefined();
		expect(screen.getByText('Wednesday')).toBeDefined();
	});
});

describe('Icon components', () => {
	it('renders Bag SVG icon', () => {
		// Render the Icon component
		const { container } = render(DoctorProfile, {
			props: BagIcon
		});

		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});

	it('renders Card icon', () => {
		const { container } = render(DoctorProfile, {
			props: CardIcon
		});
		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});

	it('renders Clock SVG icon', () => {
		const { container } = render(DoctorProfile, {
			props: ClockIcon
		});
		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});

	it('renders Hat SVG icon', () => {
		const { container } = render(DoctorProfile, {
			props: HatIcon
		});
		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});

	it('renders Phone SVG icon', () => {
		const { container } = render(DoctorProfile, {
			props: PhoneIcon
		});
		const svgElement = container.querySelector('svg');
		expect(svgElement).toBeInTheDocument();
	});
});
