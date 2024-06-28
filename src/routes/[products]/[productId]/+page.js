import products from '$lib/data/products.json';

export async function load({ params }) {
	const { productId } = params;

	const product = products.find((product) => product.id === Number(productId));

	if (!product) {
		return {
			status: 404,
			error: new Error('Product not found')
		};
	}

	return {
		product
	};
}
