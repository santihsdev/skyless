import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import SideMenu from '../../../src/lib/components/SideMenu.svelte';

describe('<SideMenu/>', () => {
	afterEach(() => {
		cleanup();
	});

	test('should render the component <SideMeu /> with property Inbox', () => {
		render(SideMenu);

		// !Renderiza el component, y buscar el texto Inbox si esta definido
		expect(screen.getByText('Inbox')).toBeDefined();
	});

	test('should render the component <SideMenu /> with property Calendar', () => {
		render(SideMenu);

		expect(screen.getByText('Calendar')).toBeDefined();
	});

	test('should render the component <SideMenu /> with property Are you a Doctor?', () => {
		render(SideMenu);

		expect(screen.getByText('Are you a doctor?')).toBeDefined();
	});
});
