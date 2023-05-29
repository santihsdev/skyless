<script>
	import { Carousel, CarouselTransition } from 'flowbite-svelte';
	let showThumbs = false;
	let showCaptions = false;
	export const images = [
		{
			id: 0,
			name: 'dentista',
			imgurl: 'src/lib/images/carousel-specialities/dentista-1.png'
		},
		{
			id: 1,
			name: 'ginec',
			imgurl: 'src/lib/images/carousel-specialities/ginecologia-1.png'
		},
		{
			id: 2,
			name: 'general',
			imgurl: 'src/lib/images/carousel-specialities/medicina-general-1.png'
		},
		{
			id: 3,
			name: 'oftalm',
			imgurl: 'src/lib/images/carousel-specialities/oftalmologia-1.png'
		},
		{
			id: 4,
			name: 'obstet',
			imgurl: 'src/lib/images/carousel-specialities/obstetricia-1.png'
		},
		{
			id: 5,
			name: 'oftalm',
			imgurl: 'src/lib/images/carousel-specialities/oftalmologia-1.png'
		},
		{
			id: 6,
			name: 'otorrino',
			imgurl: 'src/lib/images/carousel-specialities/otorrinolaringologia-1.png'
		},
		{
			id: 7,
			name: 'plastic',
			imgurl: 'src/lib/images/carousel-specialities/plastic-1.png'
		},
		{
			id: 8,
			name: 'trauma',
			imgurl: 'src/lib/images/carousel-specialities/traumatologia-1.png'
		},
		{
			id: 9,
			name: 'urolog',
			imgurl: 'src/lib/images/carousel-specialities/urologia-1.png'
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
