<script>
	import Banner from '$lib/components/Banner.svelte';
	import ProductGallery from '$lib/components/ProductGallery.svelte';

	export let data;
	let products = data.products;
</script>

<main>
	<Banner title="Bestseller" />
	<ProductGallery {products} />
</main>
