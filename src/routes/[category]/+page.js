// src/routes/[category]/+page.js
import products from '$lib/data/products.json';

export async function load({ params }) {
	const category = params.category;
	const filteredProducts = products.filter((product) => product.category === category);

	return {
		category,
		products: filteredProducts
	};
}
