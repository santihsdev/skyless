import { cleanup, render, screen } from '@testing-library/svelte';
import Footer from '../../../src/lib/components/Footer.svelte';
import MedicalCheckLogo from '$lib/images/MedicalCheckLogo.png';
import FacebookIcon from '../../../src/icons/FacebookIcon.svelte';
import InstagramIcon from '../../../src/icons/InstagramIcon.svelte';
import PhoneIcon from '../../../src/icons/PhoneIcon.svelte';
import TwitterIcon from '../../../src/icons/TwitterIcon.svelte';
import WhatsappIcon from '../../../src/icons/WhatsappIcon.svelte';
import MessageIcon from '../../../src/icons/MessageIcon.svelte';
import MapIcon from '../../../src/icons/MapIcon.svelte';


describe('Text components', () => {
	afterEach(() => {
		cleanup();
	});

	test('renders text from Contact us column', () => {
		render(Footer);

		expect(screen.getByText('Contact us')).toBeDefined();
		expect(screen.getByText('(+591) 77889944')).toBeDefined();
		expect(screen.getByText('4-4535668')).toBeDefined();
		expect(screen.getByText('medical.check@mc.bo')).toBeDefined();
		expect(screen.getByText('Av. America')).toBeDefined();
	});

    test('renders text from Social column', () => {
		render(Footer);

        expect(screen.getByText('Social')).toBeDefined();
		expect(screen.getByText('Skyless™')).toBeDefined();
		expect(screen.getByText('© 2023 . All Rights Reserved.')).toBeDefined();
    });

});

describe('Image component', () => {
    afterEach(() => {
		cleanup();
	});

    it('renders logo image', () => {
        const { getByAltText } = render(Footer, {
            props: MedicalCheckLogo,
        });

        const imageElement = getByAltText('logo footer');
        expect(imageElement).toBeInTheDocument();
    });
});

describe('Icon components', () => {
    it('renders Facebook SVG icon', () => {
      // Render the Icon component
        const { container } = render(Footer, {
            props: FacebookIcon,
        });

        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders Instagram icon', () => {
        const { container } = render(Footer, {
            props: InstagramIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders Phone SVG icon', () => {
        const { container } = render(Footer, {
            props: PhoneIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders Twitter SVG icon', () => {
        const { container } = render(Footer, {
            props: TwitterIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders Whatsapp SVG icon', () => {
        const { container } = render(Footer, {
            props: WhatsappIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders Message SVG icon', () => {
        const { container } = render(Footer, {
            props: MessageIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });

    it('renders MapIcon SVG icon', () => {
        const { container } = render(Footer, {
            props: MapIcon,
        });
        const svgElement = container.querySelector('svg');
        expect(svgElement).toBeInTheDocument();
    });
});
