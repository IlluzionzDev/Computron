<script lang="ts">
	import background from './background.svg';
</script>

<header>
	<img src="{background}" alt="Background" class="header-background"> 
	<div class="container">
		<nav>
			<ul>
				<li class="brand">
					<h1><a href="/">Computron</a></h1>
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

			li {
				list-style: none;
				font-size: 18px;
				position: relative;
				padding: 1.5rem 1rem;

				a {
					color: $white;
					text-decoration: none;
				}

				// Position first element on left
				&:first-child {
					margin-right: auto;
				}
			}
		}
	}
</style>
