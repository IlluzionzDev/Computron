<script>
	import Hero from '$lib/hero/Hero.svelte';

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
			<a href="/tutorials"><button class="btn btn-solid">GO BACK</button></a>
		</div>
	</Hero>

	<div class="tutorial">
		<!-- Tutorial content -->
		<!-- Due to the nature of markdown, have to have scss in an external file -->
		<slot />
	</div>
</div>