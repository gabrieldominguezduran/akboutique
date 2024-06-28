<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { onNavigate } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Cart from '../lib/components/Cart.svelte';

	export let title = 'AK Boutique - Sklep Online | Odkryj Najnowsze Trendy';
	export let description =
		'Odkryj najnowsze trendy w czołowym miejscu mody w Polsce! Zakupy online kolekcji stylowych ubrań i akcesoriów na każdą okazję. Podnieś swoją garderobę dzięki modnym i wysokiej jakości produktom. Szybka wysyłka w całej Polsce. Kup teraz i wyraź swój unikatowy styl!';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const isHomePage = derived(page, ($page) => $page.url.pathname === '/');
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="description" content={description} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
	/>
	<title>{title}</title>
</svelte:head>
<Header />
{#if $isHomePage}
	<Banner title="New Collection" />
{/if}
<slot />
<Cart />
<Footer />

<style>
	@import '$lib/styles/global.css';
</style>
