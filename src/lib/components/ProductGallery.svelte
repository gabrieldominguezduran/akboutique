<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import products from '$lib/data/products.json';
</script>

<div class="gallery">
	{#each products as product}
		<div class="product-card">
			<a href={`/products/${product.id}`}>
				<ProductCard name={product.name} price={product.price} image={product.image} />
			</a>
		</div>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;
		padding: 1rem 0;
	}

	.gallery a,
	.gallery a:hover,
	.gallery a:visited {
		text-decoration: none;
		color: inherit;
	}

	@media (max-width: 1350px) {
		.gallery {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 900px) {
		.gallery {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 600px) {
		.gallery {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
