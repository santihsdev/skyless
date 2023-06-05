<script>
	import { Carousel } from 'flowbite-svelte';
	import { images } from '$lib/utility/carouselData.js';
	let showThumbs = false;
	let showCaptions = false;
</script>
<div class="max-w-4xl, container" data-testid="carousel">
	<Carousel {images} loop {showCaptions} {showThumbs} duration="2500" />
</div>
<style>
	@import '$lib/utility/carousel.css';
</style>