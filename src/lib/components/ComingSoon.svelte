<script>
	import pinkLogo from '$lib/assets/images/logo_pink.png';
</script>

<section class="container">
	<img src={pinkLogo} alt="Pink logo" />
	<p>Coming soon...</p>
	<div class="air air1"></div>
	<div class="air air2"></div>
	<div class="air air3"></div>
	<div class="air air4"></div>
</section>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background: var(--main-pink);
	}

	img {
		width: 50%;
		height: auto;
		margin-top: -10rem;
	}

	@font-face {
		font-family: 'Great Vibes';
		src: url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
	}

	p {
		font-family: 'Great Vibes', cursive;
		font-size: 10rem;
		color: var(--main-white);
		margin-top: -5rem;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	@media (max-width: 768px) {
		img {
			width: 100%;
		}
		p {
			font-size: 5rem;
		}
	}

	section .air {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100px;
		background: url(https://1.bp.blogspot.com/-xQUc-TovqDk/XdxogmMqIRI/AAAAAAAACvI/AizpnE509UMGBcTiLJ58BC6iViPYGYQfQCLcBGAsYHQ/s1600/wave.png);
		background-size: 1000px 100px;
	}
	section .air.air1 {
		animation: wave 30s linear infinite;
		z-index: 1000;
		opacity: 1;
		animation-delay: 0s;
		bottom: 0;
	}
	section .air.air2 {
		animation: wave2 15s linear infinite;
		z-index: 999;
		opacity: 0.5;
		animation-delay: -5s;
		bottom: 10px;
	}
	section .air.air3 {
		animation: wave 30s linear infinite;
		z-index: 998;
		opacity: 0.2;
		animation-delay: -2s;
		bottom: 15px;
	}
	section .air.air4 {
		animation: wave2 5s linear infinite;
		z-index: 997;
		opacity: 0.7;
		animation-delay: -5s;
		bottom: 20px;
	}
	@keyframes wave {
		0% {
			background-position-x: 0px;
		}
		100% {
			background-position-x: 1000px;
		}
	}
	@keyframes wave2 {
		0% {
			background-position-x: 0px;
		}
		100% {
			background-position-x: -1000px;
		}
	}
</style>
