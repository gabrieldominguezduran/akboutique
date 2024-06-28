<script>
	import ProductGallery from '$lib/components/ProductGallery.svelte';
	import Banner from '$lib/components/Banner.svelte';

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	}
	export let data;

	$: category = data.category;
	$: products = data.products;

	$: capitalizedTitle = capitalizeFirstLetter(category);
</script>

<main>
	<Banner title={capitalizedTitle} />
	<ProductGallery {products} />
</main>
