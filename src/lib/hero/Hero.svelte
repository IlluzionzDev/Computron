<div class="hero">
	<slot />
</div>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../../css/colors.scss';

	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 70px;
		height: 50vh;

		:global(h1) {
			font-size: 48px;
			font-weight: bold;
			padding-bottom: 15px;
		}

		:global(p) {
			font-size: 18px;
            font-family: Mulish;
			width: 50%;
		}
	}
</style>
