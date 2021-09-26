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
	<Hero center={true}>
		<h1>{title}</h1>
		<p>{description}</p>
		<div class="button-row">
			<a href="{base}/tutorials"><button class="btn btn-solid">GO BACK</button></a>
		</div>
	</Hero>

	<div class="tutorial">
		<!-- Tutorial content -->
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../../css/colors.scss';

	// Format the markdown container
	.tutorial {
		padding-bottom: 4rem;
		text-align: center;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	// Formatting for the actual markdown elements
	.tutorial :global(h1) {
		font-size: 3rem;

		padding: 22px;
		padding-top: 8.875rem;

		&:first-child {
			padding-top: 0;
		}
	}

	.tutorial :global(p) {
		font-size: 1.125rem;
		width: 80%;
	}
</style>
