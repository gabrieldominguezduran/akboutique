<script>
	import logo from '$lib/assets/images/logo_pink.png';
	import { isCartOpen, cartItems, removeCartItem } from '$lib/stores/cart';

	let isCartOpenValue;
	let cartItemsValue = [];

	if (typeof document !== 'undefined') {
		isCartOpen.subscribe((value) => {
			isCartOpenValue = value;
			if (isCartOpenValue) {
				document.body.classList.add('cart-open');
			} else {
				document.body.classList.remove('cart-open');
			}
		});
	}

	cartItems.subscribe((value) => {
		cartItemsValue = Object.values(value);
	});

	const closeCart = () => {
		isCartOpen.set(false);
	};
</script>

<aside class="cart-slide" class:open={isCartOpenValue}>
	<div class="cart-container">
		<button class="close-cart" on:click={closeCart}>×</button>
		<div class="cart-logo">
			<img class="cart-img" src={logo} alt="Logo" />
		</div>
		<ul>
			{#each cartItemsValue as cartItem}
				<li key={cartItem.id}>
					<img class="item-img" src={cartItem.image_public} alt={cartItem.name} />
					<div class="item-info">
						<p class="item-name">{cartItem.name}</p>
						<p class="item-price"><span>Total: </span>{cartItem.price * cartItem.quantity} zl</p>
					</div>
					<button class="trash-btn" on:click={() => removeCartItem(cartItem.id)}>
						<i class="fa-regular fa-trash-can"></i>
					</button>
				</li>
			{/each}
		</ul>
		{#if cartItemsValue.length > 0}
			<button class="checkout-btn">Check out</button>
		{:else}
			<p class="empty-text">Your cart is empty!</p>
		{/if}
	</div>
</aside>

<style>
	.cart-slide {
		position: fixed;
		right: 0;
		top: 0;
		width: 100vw;
		max-width: 500px;
		height: fit-content;
		min-height: 75%;
		background: var(--main-white);
		border: 1px solid var(--main-pink);
		border-radius: 5px;
		transform: translateX(100%);
		transition: transform 0.3s ease-in-out;
		margin: 0;
		padding: 0;
	}
	.cart-slide.open {
		transform: translateX(0);
	}

	.cart-container {
		display: flex;
		flex-direction: column;
		padding-bottom: 3rem;
	}

	.cart-logo {
		display: flex;
		justify-content: center;
		margin: 2rem 0;
	}

	.cart-container ul {
		list-style: none;
		padding: 1rem 0.5rem;
		flex-grow: 1;
	}

	.cart-container li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 2rem;
	}

	.item-name,
	.item-price {
		font-size: 0.8rem;
		color: var(--main-dark);
	}

	.cart-img {
		width: 50px;
		height: auto;
		border-radius: 10px;
	}

	.item-img {
		width: 50px;
		height: auto;
		border-radius: 10px;
	}

	.cart-container .close-cart {
		color: var(--main-dark);
		background: none;
		border: none;
		font-size: 3rem;
		position: absolute;
		top: 10px;
		right: 10px;
		cursor: pointer;
		padding: 0;
	}

	.trash-btn {
		background: none;
		border: none;
		color: var(--main-dark);
		font-size: 1.5rem;
		cursor: pointer;
	}

	.checkout-btn {
		min-width: 15rem;
		background-color: var(--main-pink);
		color: var(--main-dark);
		border: 1px solid var(--main-dark);
		padding: 0.5rem 1rem;
		border-radius: 5px;
		font-size: 1rem;
		cursor: pointer;
		margin: 1rem auto;
		place-self: end;
	}

	.checkout-btn:hover {
		background-color: var(--main-dark);
		color: var(--main-white);
	}

	.empty-text {
		font-size: 2rem;
		text-align: center;
		margin-top: 5rem auto;
	}

	@media (min-width: 768px) {
		.cart-slide {
			min-height: 80%;
		}
		.cart-slide ul {
			list-style: none;
			padding: 1.25rem;
		}
		.item-name {
			font-size: 1rem;
			color: var(--main-dark);
		}
		.cart-img {
			width: 80px;
		}
		.item-img {
			width: 80px;
		}
	}
</style>
