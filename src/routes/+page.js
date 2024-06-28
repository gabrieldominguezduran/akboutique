// src/routes/+page.js
import products from '$lib/data/products.json';

export async function load() {
	// Filter products to only those that are part of the new collection
	const newCollectionProducts = products.filter((product) => product.isNewCollection);

	return {
		products: newCollectionProducts
	};
}
