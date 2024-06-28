<script>
	import ComingSoon from '$lib/components/ComingSoon.svelte';
	import ProductGallery from '$lib/components/ProductGallery.svelte';

	export let data;
	let products = data.products;
</script>

<main>
	<ProductGallery {products} />
	<!-- <ComingSoon /> -->
</main>
