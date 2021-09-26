<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import downloadsJson from './downloads.json';

	// Async function so loads as rest of page loads
	async function getCategories() {
		return downloadsJson.categories;
	}

	const downloads = getCategories();

	$: selected_category = 'all';
</script>

<svelte:head>
	<title>Computron - Software</title>
</svelte:head>

<div class="container">
	<Hero>
		<h1>Recommended Software.</h1>
		<p>Below are some the best recommended software to get your computer up and running nice and fast. Find all the downloads links and information you need.</p>
		<!-- Buttons for categories -->
		<div class="download-button-row">
			<button class="btn btn-solid" class:selected={selected_category == 'all'} on:click={() => (selected_category = 'all')}>All</button>
			{#await downloads then downloads}
				{#each downloads as category}
					<button class="btn btn-solid" class:selected={selected_category == category.id.toString()} on:click={() => (selected_category = category.id.toString())}>{category.title}</button>
				{/each}
			{:catch error}
				<p>{error.message}</p>
			{/await}
		</div>
	</Hero>

	<!-- Render all the download cards -->
	{#await downloads}
		<div class="card">
			<h1>Loading</h1>
			<p>Cards are loading</p>
			<button class="btn btn-solid">LOADING...</button>
		</div>
	{:then downloads}
		{#each downloads as category}
			{#if category.id.toString() == selected_category || selected_category == 'all'}
				<h1 class="section-header">{category.title}</h1>
				<div class="cards">
					{#each category.children as download}
						<div class="card">
							<h1>{download.name}</h1>
							<p>{download.description}</p>
							<a target="_blank" href={download.link}><button class="btn btn-solid">DOWNLOAD</button></a>
						</div>
					{/each}
				</div>
			{/if}
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>

<style lang="scss">
	@import '../../css/colors.scss';
	@import '../../css/include-media.scss';

	.download-button-row {
		padding: 30px 0;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		width: 90%;
		gap: 10px 10px;

		@include media('<455px') {
			width: 100%;
			padding-bottom: 0;
		}
	}

	button {
		&.btn {
			@include media('<455px') {
				width: auto;
			}
		}
	}

	// Section header
	.section-header {
		padding: 40px 0;

		@include media('<455px') {
			text-align: center;
		}
	}
</style>
