<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/tutorials/tutorials.json`);
		const { tutorials } = await res.json();
		return {
			props: { tutorials }
		};
	}
</script>

<script>
	import Hero from '$lib/hero/Hero.svelte';
	import { base } from '$app/paths';

	// Import tutorials JSON
	export let tutorials;
</script>

<div class="container">
	<Hero>
		<h1>Tutorials and Settings.</h1>
		<p>
			Help you utilise your device to the fullest with these tips and tricks to
			get everything setup as efficiently as possible for maximum efficiency.
		</p>
	</Hero>

	<!-- Render all the download cards -->
	<div class="cards">
		{#each tutorials as tutorial}
			<div class="card">
				<h1>{tutorial.title}</h1>
				<p>{tutorial.description}</p>
				<a href="{base}/tutorials/{tutorial.slug}"><button class="btn btn-solid">VIEW</button></a>
			</div>
		{/each}
	</div>
</div>
