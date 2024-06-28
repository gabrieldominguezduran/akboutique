import products from '$lib/data/products.json';

export async function load() {
	const saleProducts = products.filter((product) => product.sale);

	return {
		products: saleProducts
	};
}
