<script lang="ts">
	// If to center align this hero by default
	export let center: boolean = false;
</script>

<!-- Apply center class if center hero is enabled -->
<div class="hero {center ? 'centered' : ''}">
	<slot />
</div>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../../css/colors.scss';
	@import '../../css/include-media.scss';

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 16rem;
		padding-top: 12rem;

		@include media('<455px') {
			text-align: center;
			padding-top: 3rem;
			padding-bottom: 5rem;
		}

		:global(h1) {
			font-size: 3rem;
			font-weight: bold;
			padding-bottom: 15px;
		}

		:global(p) {
			font-size: 1.125rem;
			font-family: Mulish;
			width: 90%;

			@include media('<455px') {
				width: 100%;
			}
		}
	}

	.centered {
		align-items: center;
		text-align: center;
	}
</style>
