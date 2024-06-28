<script>
	export let title;
</script>

<div class="text">
	<p>{title}</p>
</div>

<style>
	.text {
		text-align: center;
	}

	.text p {
		font-family: 'Dancing Script', cursive;
		font-optical-sizing: auto;
		font-weight: 600;
		font-style: normal;
		font-size: 4rem;
		color: var(--main-dark);
		margin: 1.5rem;
	}

	@media (max-width: 768px) {
		.text p {
			font-size: 3rem;
			margin: 0.5rem;
		}
	}
</style>
