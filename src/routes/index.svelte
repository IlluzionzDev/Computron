<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
</script>

<div class="container">
	<Hero>
		<h1>Quick and Efficient Setup.</h1>
		<p>
			Computron allows for quick and easy setup of new computers with the best <br />
			recommended software along with tutorials for setup and recommended settings.
		</p>
		<div class="button-row">
			<button class="btn btn-solid">GET STARTED</button>
            <button class="btn btn-outline">FIND TUTORIALS</button>
		</div>
	</Hero>
</div>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../css/colors.scss';
</style>
