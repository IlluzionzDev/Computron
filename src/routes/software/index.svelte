<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
import { identity } from 'svelte/internal';
	import downloadsJson from './downloads.json';

	// Async function so loads as rest of page loads
	async function getCategories() {
		return downloadsJson.categories;
	}

	const downloads = getCategories();

	$: selected_category = 'all';
</script>

<div class="container">
	<Hero>
		<h1>Recommended Software.</h1>
		<p>
			Below are some the best recommended software to get your computer up and <br />
			running nice and fast. Find all the downloads links and information you need.
		</p>
		<!-- Buttons for categories -->
		<div class="download-button-row">
			<button class="btn btn-solid" class:selected="{selected_category == 'all'}" on:click={() => (selected_category = 'all')}>All</button>
			{#await downloads then downloads}
				{#each downloads as category}
					<button class="btn btn-solid" class:selected="{selected_category == category.id.toString()}" on:click={() => (selected_category = category.id.toString())}>{category.title}</button>
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

	.download-button-row {
		padding: 30px 0;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		width: 90%;
		gap: 10px 10px;
	}

	// Section header
	.section-header {
		padding: 40px 0;
	}

	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		padding-bottom: 100px;

		gap: 26px 30px;

		& .card {
			transition: all 0.5s;

			flex: 1;
			flex-basis: 20%;

			display: flex;
			flex-direction: column;

			background-color: $white;
			color: $secondary-blue;

			border-radius: 4px;
			padding: 20px 30px;

			position: relative;
			align-items: center;
			align-content: center;
			justify-content: center;
			text-align: center;

			h1 {
				font-size: 22px;
				font-weight: bold;
			}

			p {
				padding: 20px 0px;
				font-family: Mulish;
				font-size: 14px;
				width: 90%;
			}

			&:hover {
				flex-grow: 1.2;
			}
		}
	}
</style>
