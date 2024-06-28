import products from '$lib/data/products.json';

export async function load() {
	const bestsellerProducts = products.filter((product) => product.isBestseller);

	return {
		products: bestsellerProducts
	};
}
