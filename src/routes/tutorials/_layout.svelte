<script>
	import Hero from '$lib/hero/Hero.svelte';
	import { base } from '$app/paths';

	export let title;
	export let description;
</script>

<svelte:head>
	<title>Computron - {title}</title>
</svelte:head>

<!-- Route all requests to /tutorials/{id} -->
<div class="container">
	<div class="tutorial-header">
		<Hero>
			<h1>{title}</h1>
			<p>{description}</p>
			<div class="button-row">
				<a href="{base}/tutorials"><button class="btn btn-solid">GO BACK</button></a>
			</div>
		</Hero>
	</div>

	<div class="tutorial">
		<!-- Tutorial content -->
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../../css/colors.scss';

	.tutorial-header {
		:global(.hero) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}

	.tutorial {
		padding-bottom: 4rem;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		// Heading
		:global(h1) {
			font-size: 3rem;
			font-weight: bold;

			padding: 1.375rem 0;
			padding-top: 8.875rem;

			&:first-child {
				padding-top: 0;
			}
		}

		:global(p) {
			font-size: 1.125rem;
			font-family: Mulish;
			padding-bottom: 20px 0;
			width: 60%;
		}
	}
</style>
