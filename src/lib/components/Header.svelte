<script>
	import logo from '$lib/assets/images/logo_white.png';
	import { onMount } from 'svelte';
	import { isCartOpen, cartItems } from '$lib/stores/cart';

	let isMenuOpen = false;
	let cartItemsValue = [];
	let totalItems = 0;

	function handleCartToggle() {
		isCartOpen.update((value) => !value);
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleOutsideClick(event) {
		if (isMenuOpen && !event.target.closest('.menu') && !event.target.closest('.hamburger')) {
			closeMenu();
		}
	}

	cartItems.subscribe((items) => {
		cartItemsValue = Object.values(items);
		totalItems = cartItemsValue.reduce((sum, item) => sum + item.quantity, 0);
	});

	onMount(() => {
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	});
</script>

<header class="container">
	<div class="hero">
		<button class="hamburger" on:click={toggleMenu}>
			<i class="fa-solid fa-bars"></i>
		</button>
		<a href="/">
			<img class="logo" src={logo} alt="logo" width="200" height="200" />
		</a>
		<div class="cart-container">
			<button class="cart-btn" on:click={handleCartToggle}>
				<i class="fa-solid fa-bag-shopping"></i>
				{#if totalItems > 0}
					<span class="cart-count">{totalItems}</span>
				{/if}
			</button>
		</div>
	</div>

	<nav class="menu" class:isMenuOpen>
		<div class="menu-content">
			<button class="close-menu" on:click={toggleMenu}>
				<i class="fa-solid fa-times"></i>
			</button>
			<div class="menu-links">
				<div class="menu-primary">
					<a class="home-link" href="/">Home</a>
					<a href="/kombinezony">Kombinezony</a>
					<a href="/komplety">Komplety</a>
					<a href="/bluzki">Bluzki</a>
				</div>
				<div class="menu-secondary">
					<a href="/bestseller">Bestseller</a>
					<a href="/sales">Sales</a>
				</div>
			</div>
			<div class="social-icons">
				<a href="https://www.facebook.com/profile.php?id=61559524062890" target="_blank">
					<i class="fa-brands fa-facebook"></i>
				</a>
				<a href="https://www.instagram.com/akboutique.pl/" target="_blank">
					<i class="fa-brands fa-square-instagram"></i>
				</a>
			</div>
		</div>
	</nav>
</header>

<style>
	.hero {
		max-width: 1500px;
		margin: 0 auto;
		background-color: var(--main-pink);
		height: 100px;
		z-index: 5;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
	}

	.logo {
		mix-blend-mode: multiply;
	}

	.hamburger,
	.close-menu,
	.cart-btn {
		background-color: transparent;
		border: none;
		cursor: pointer;
		color: var(--main-dark);
		font-size: 1.5rem;
		place-self: auto;
		position: relative;
	}

	.cart-container {
		position: relative;
	}

	.cart-btn {
		color: var(--main-dark);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		max-width: fit-content;
	}

	.cart-btn .cart-count {
		position: absolute;
		top: -10px;
		right: -10px;
		background-color: gray;
		color: white;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.8rem;
	}

	.menu {
		position: fixed;
		top: 0;
		left: -100%;
		width: 100%;
		max-width: 300px;
		height: 100%;
		background: var(--main-pink);
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		transition: left 0.3s ease;
		z-index: 10;
	}

	.menu.isMenuOpen {
		left: 0;
	}

	.menu-content {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100%;
	}

	.close-menu {
		align-self: flex-end;
	}

	.home-link {
		margin-top: 2rem;
		margin-bottom: 5rem;
	}

	.menu-links {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.menu-secondary {
		margin-bottom: 2rem;
	}

	.social-icons {
		display: flex;
		justify-content: center;
	}

	.menu-links a,
	.social-icons a {
		display: block;
		color: var(--main-dark);
		text-decoration: none;
		font-size: 1.5rem;
		margin-right: 1rem;
	}

	.menu-links a:hover,
	.social-icons a:hover {
		color: var(--main-white);
	}
</style>
