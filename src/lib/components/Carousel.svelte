<script>
	import { Carousel } from 'flowbite-svelte';
	let showThumbs = false;
	let showCaptions = false;
	import dentista from '$lib/images/carousel-specialities/dentista-1.png';
	import ginec from '$lib/images/carousel-specialities/ginecologia-1.png';
	import general from '$lib/images/carousel-specialities/medicina-general-1.png';
	import oftalm from '$lib/images/carousel-specialities/oftalmologia-1.png';
	import obstet from '$lib/images/carousel-specialities/obstetricia-1.png';
	import otorrino from '$lib/images/carousel-specialities/otorrinolaringologia-1.png';
	import plastic from '$lib/images/carousel-specialities/plastic-1.png';
	import trauma from '$lib/images/carousel-specialities/traumatologia-1.png';
	import urolog from '$lib/images/carousel-specialities/urologia-1.png';

	export const images = [
		{
			id: 0,
			name: 'dentista',
			imgurl: dentista
		},
		{
			id: 1,
			name: 'ginec',
			imgurl: ginec
		},
		{
			id: 2,
			name: 'general',
			imgurl: general
		},
		{
			id: 3,
			name: 'oftalm',
			imgurl: oftalm
		},
		{
			id: 4,
			name: 'obstet',
			imgurl: obstet
		},
		{
			id: 5,
			name: 'oftalm',
			imgurl: oftalm
		},
		{
			id: 6,
			name: 'otorrino',
			imgurl: otorrino
		},
		{
			id: 7,
			name: 'plastic',
			imgurl: plastic
		},
		{
			id: 8,
			name: 'trauma',
			imgurl: trauma
		},
		{
			id: 9,
			name: 'urolog',
			imgurl: urolog
		}
	];
</script>

<div class="max-w-4xl, container" data-testid="carousel">
	<Carousel {images} loop {showCaptions} {showThumbs} duration="2500" />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: auto;
		margin: auto;
		padding: auto;
		max-width: auto;
		margin-right: 90px;
	}
</style>
