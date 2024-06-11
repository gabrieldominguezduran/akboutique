<script>
	export let title = 'AK Boutique - Sklep Online | Odkryj Najnowsze Trendy';
	export let description =
		'Odkryj najnowsze trendy w czołowym miejscu mody w Polsce! Zakupy online kolekcji stylowych ubrań i akcesoriów na każdą okazję. Podnieś swoją garderobę dzięki modnym i wysokiej jakości produktom. Szybka wysyłka w całej Polsce. Kup teraz i wyraź swój unikatowy styl!';
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

<slot />

<style>
	@import '$lib/styles/global.css';
</style>
