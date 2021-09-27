<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import '../css/global.scss';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
