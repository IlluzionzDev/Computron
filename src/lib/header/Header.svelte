<script lang="ts">
	import background from './background.svg';
</script>

<header>
	<img src={background} alt="Background" class="header-background" />
	<div class="container">
		<nav>
			<ul>
				<li class="brand">
					<h1>Computron</h1>
				</li>
				<li><a href="/">Home</a></li>
				<li><a href="/software">Software</a></li>
				<li><a href="/tutorials">Tutorials</a></li>
			</ul>
		</nav>
	</div>
</header>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../../css/colors.scss';
	@import '../../css/include-media.scss';

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.header-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: -999;
	}

	// Branding on nav
	.brand {
		font-weight: bold;
	}

	nav {
		ul {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			gap: 2rem;
			margin: 0;
			padding: 0;

			@include media('<455px') {
				gap: 1rem;
			}

			li {
				list-style: none;
				font-size: 1.125rem;
				position: relative;
				padding: 1.5rem 1rem;

				@include media('<455px') {
					font-size: 1rem;
				}

				a {
					color: $white;
					text-decoration: none;
					transition: 200ms ease-in-out;

					&:hover {
						color: $secondary-blue;
					}
				}

				// Make first element on left and align to edges of
				&:first-child {
					margin-right: auto;
					padding-left: 0;
				}

				&:last-child {
					padding-right: 0;
				}
			}
		}
	}
</style>
