<footer class="footer">
	<div class="footer-content">
		<div class="footer-info">
			<h3>Information</h3>
			<a href="/about">O nas</a>
			<a href="/contact">Kontakt</a>
			<a href="/privacy">Polityka prywatności</a>
			<a href="/terms">Regulamin</a>
		</div>
		<div class="footer-column">
			<h3>Follow Us</h3>

			<div class="social-icons">
				<a href="facebook.com"><i class="fa-brands fa-facebook"></i></a>
				<a href="instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
				<a href="twitter.com"><i class="fa-brands fa-square-twitter"></i></a>
				<a href="youtube.com"><i class="fa-brands fa-square-youtube"></i></a>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--main-dark);
		color: var(--main-white);
		padding: 1rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer-content {
		display: flex;
		justify-content: space-around;
		width: 100%;
		max-width: 1200px;
	}

	.footer-column {
		margin: 0 1rem;
		padding: 1rem;
	}

	.footer h3 {
		color: var(--main-light);
		margin-bottom: 0.5rem;
	}

	.footer-column,
	.footer-info a {
		display: flex;
		flex-direction: column;
		margin: 0.5rem 0;
		color: var(--main-white);
		text-decoration: none;
		font-size: 1rem;
		font-weight: bold;
	}

	.footer-column a:hover {
		color: var(--main-pink);
	}

	.social-icons {
		display: flex;
		align-items: center;
	}

	.social-icons a {
		margin: 0 0.5rem;
		font-size: 2rem;
		color: var(--main-pink);
	}

	@media (max-width: 600px) {
		.footer-content {
			flex-direction: row;
			align-items: center;
		}

		.footer-column {
			margin: 0.5rem 0;
		}

		.social-icons {
			justify-content: center;
			margin-top: 1rem;
		}

		.social-icons a {
			font-size: 2rem;
			color: var(--main-pink);
		}
	}
</style>
