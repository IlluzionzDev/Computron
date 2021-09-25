<script>
	import Hero from '$lib/hero/Hero.svelte';
	import { base } from '$app/paths';

	export let title;
	export let description;
</script>

<!-- Route all requests to /tutorials/{id} -->
<div class="container">
	<Hero>
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