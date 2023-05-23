import { cleanup, render, screen } from '@testing-library/svelte';
import SideMenu from '../../../src/lib/components/SideMenu.svelte';

describe('<SideMenu/>', () => {
	afterEach(() => {
		cleanup();
	});

	test('should render the component <SideMeu />', () => {
		render(SideMenu);

		// !Renderiza el component, y buscar el texto Inbox si esta definido
		expect(screen.getByText('Inbox')).toBeDefined();
	});
});
