<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import chrome from '../img/icon/chrome.svg';
	import google_docs from '../img/icon/google-docs.svg';
	import headphones from '../img/icon/headphones.svg';
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
	<div class="section-card">
		<h1>Recommended Software</h1>
		<div class="overview-row">
			<div class="overview-section">
				<img src="{chrome}" alt="">
				<h1>Browsers</h1>
				<p>Get the best browser to easily navigate the web and download anything else you may need</p>
			</div>
			<div class="overview-section">
				<img src="{google_docs}" alt="">
				<h1>Documents</h1>
				<p>Software to help you edit all kinds of documents and maximise efficiency above all</p>
			</div>
			<div class="overview-section">
				<img src="{headphones}" alt="">
				<h1>Audio / Video</h1>
				<p>Easy to use software for short edits of videos or tampering with some audio files</p>
			</div>
		</div>
		<button class="btn btn-solid">MORE INFO</button>
	</div>
</div>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../css/colors.scss';

	.section-card {
		width: 80%;
		display: flex;
		flex-direction: column;

		color: $secondary-blue;
		background-color: $white;

		align-items: center;
		justify-content: center;
		text-align: center;
		position: relative;
		padding: 40px 25px;

		border-radius: 4px;

		& .overview-row {
			display: flex;
			flex-direction: row;
			padding: 50px;

			& .overview-section {
				display: flex;
				// To ensure spaced evenly
				flex: 1;
				flex-direction: column;

				align-items: center;
				justify-content: center;
				position: relative;

				// Icon
				img {
					fill: $secondary-blue;
					height: 30px
				}

				h1 {
					font-size: 18px;
					font-weight: bold;
					color: $primary-blue;
					text-transform: uppercase;
					padding: 9px 0px;
				}

				p {
					width: 80%;
					font-family: Mulish;
					font-size: 16px;
				}
			}
		}

		h1 {
			font-size: 36px;
			font-weight: bold;
		}
	}
</style>
