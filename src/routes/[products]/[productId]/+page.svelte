<script>
	import { addCartItem } from '$lib/stores/cart';

	export let data;
	const { product } = data;

	let imageUrl = '';

	$: if (product) {
		imageUrl = `/images/${String(product.id)}.webp`;
	}

	function handleAddToCart() {
		addCartItem({
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: 1,
			image: imageUrl
		});
	}
</script>

{#if product}
	<main class="product-detail">
		<button class="back-btn" on:click={() => history.back()}>X</button>

		<div class="product-display">
			<div class="image">
				<img src={imageUrl} alt={product.name} view-transition-name={`image-${product.name}`} />
			</div>
			<div class="product-info">
				<div class="text">
					<h1>{product.name}</h1>
					<p class="description">{product.description}</p>
				</div>
				<div class="price-and-cart">
					<div class="qty-price">
						<span class="product-price">Price: {product.price} zl</span>
					</div>
					<div class="buttons">
						<button class="buy-btn" on:click={handleAddToCart}>
							Add to <span><i class="fa-solid fa-bag-shopping"></i></span></button
						>
						<button class="buy-btn">Buy <span><i class="fa-regular fa-heart"></i></span></button>
					</div>
				</div>
			</div>
		</div>
	</main>
{:else}
	<p>Loading...</p>
{/if}

<style>
	.product-detail {
		width: 100%;
		height: auto;
		background: var(--main-white);
		padding: 2rem;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.back-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 2rem;
		background: none;
		border: none;
		cursor: pointer;
		text-decoration: none;
		color: var(--main-dark);
		padding: 0;
		margin: 0;
	}

	.back-btn:hover,
	.back-btn:focus,
	.back-btn:active,
	.back-btn:visited {
		text-decoration: none;
		padding: 0;
		margin: 0;
	}

	.product-display {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: center;
	}

	.image {
		grid-column: 1 / 2;
		max-width: 55%;
		margin-bottom: 1rem;
		text-align: center;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 10px;
		margin-bottom: 1rem;
	}

	.product-info {
		text-align: center;
		width: 100%;
		border-radius: 10px;
		padding: 1rem;
	}

	.text {
		border: 1px solid var(--main-pink);
		padding: 1rem;
		margin-bottom: 1rem;
		border-radius: 10px;
	}

	.product-info h1 {
		text-align: center;
		font-size: 2rem;
		color: var(--main-dark);
		margin-bottom: 2rem;
	}

	.description {
		width: 70%;
		font-size: 1rem;
		color: var(--secondary-dark);
		text-align: justify;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	.price-and-cart {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	.qty-price {
		display: flex;
		flex-direction: column-reverse;
		place-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.product-price {
		font-size: 1rem;
		font-weight: bold;
		color: var(--main-dark);
	}

	.buttons {
		display: flex;
		gap: 1rem;
	}

	.buttons > * {
		min-width: 8rem;
		flex-grow: 1;
	}

	/* .add-to-cart-btn, */
	.buy-btn {
		background-color: var(--main-pink);
		color: var(--main-dark);
		border: 1px solid var(--main-dark);
		padding: 0.625rem 1.25rem;
		cursor: pointer;
		border-radius: 5px;
		font-size: 1rem;
	}

	.buy-btn {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	/* .add-to-cart-btn:hover, */
	.buy-btn:hover {
		background-color: var(--main-dark);
		color: var(--main-white);
	}

	@media (max-width: 1024px) {
		.product-detail {
			padding: 3rem;
		}

		.image {
			max-width: 85%;
		}

		.product-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-top: 2.5rem;
		}

		.text {
			margin-top: 2rem;
		}

		.product-info h1 {
			font-size: 1.5rem;
		}

		.description {
			width: 90%;
			font-size: 1rem;
			margin: 1.5rem auto;
		}
	}

	@media (max-width: 768px) {
		.image {
			max-width: 100%;
			margin-top: 2.5rem;
		}

		.product-display {
			flex-direction: row;
			align-items: flex-start;
			gap: 2rem;
		}

		.product-info {
			text-align: left;
			max-width: 600px;
		}

		.text {
			margin-top: 0;
		}

		.description {
			width: 100%;
			font-size: 1.25rem;
		}
	}

	@media (max-width: 600px) {
		.product-detail {
			width: 100%;
			padding: 1rem;
			padding-bottom: 3rem;
		}

		.product-display {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.image {
			width: 70%;
		}

		.product-info {
			padding: 1rem;
		}
	}
</style>
