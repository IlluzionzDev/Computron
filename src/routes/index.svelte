<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import chrome from '../img/icon/chrome.svg';
	import google_docs from '../img/icon/google-docs.svg';
	import headphones from '../img/icon/headphones.svg';
	import support from '../img/icon/support.svg';
	import windows from '../img/icon/windows.svg';
	import convert from '../img/icon/convert.svg';
</script>

<div class="container">
	<Hero>
		<h1>Quick and Efficient Setup.</h1>
		<p>
			Computron allows for quick and easy setup of new computers with the best
			recommended software along with tutorials for setup and recommended settings.
		</p>
		<div class="button-row">
			<button class="btn btn-solid">GET STARTED</button>
			<button class="btn btn-outline">FIND TUTORIALS</button>
		</div>
	</Hero>
	<!-- Contain the section cards -->
	<div>
		<div class="section-card">
			<h1>Recommended Software</h1>
			<div class="overview-row">
				<div class="overview-section">
					<img src={chrome} alt="Chrome" />
					<h1>Browsers</h1>
					<p>Get the best browser to easily navigate the web and download anything else you may need</p>
				</div>
				<div class="overview-section">
					<img src={google_docs} alt="Google Docs" />
					<h1>Documents</h1>
					<p>Software to help you edit all kinds of documents and maximise efficiency above all</p>
				</div>
				<div class="overview-section">
					<img src={headphones} alt="Headphones" />
					<h1>Audio / Video</h1>
					<p>Easy to use software for short edits of videos or tampering with some audio files</p>
				</div>
			</div>
			<button class="btn btn-solid">MORE INFO</button>
		</div>
		<div class="section-card">
			<h1>Tutorials</h1>
			<div class="overview-row">
				<div class="overview-section">
					<img src={support} alt="" />
					<h1>Support</h1>
					<p>Get the support you need such as remote support or assistance setting up things</p>
				</div>
				<div class="overview-section">
					<img src={windows} alt="" />
					<h1>Operating Systems</h1>
					<p>Help with setting up different operating systems and some handy configuration</p>
				</div>
				<div class="overview-section">
					<img src={convert} alt="" />
					<h1>Converting</h1>
					<p>Easy little tutorials to convert certain files to another or quickly create certain files</p>
				</div>
			</div>
			<button class="btn btn-solid">MORE INFO</button>
		</div>
	</div>
</div>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../css/colors.scss';
	@import '../css/include-media.scss';

	.section-card {
		width: 80%;
		display: flex;
		flex-direction: column;

		color: $secondary-blue;
		background-color: $secondary-white;

		align-items: center;
		justify-content: center;
		text-align: center;
		position: relative;
		padding: 40px 25px;

		margin-bottom: 100px;

		border-radius: 4px;

		@include media("<desktop") {
			width: 100%;
		}

		// Align second card to the right
		&:nth-child(2) {
			margin-left: auto;
		}

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
				// Align titles at top of box
				justify-content: top;
				position: relative;

				// Icon
				img {
					height: 30px;
				}

				h1 {
					font-size: 1.125rem;
					font-weight: bold;
					color: $primary-blue;
					text-transform: uppercase;
					padding: 9px 0px;
				}

				p {
					width: 80%;
					font-family: Mulish;
					font-size: 1rem;
				}
			}
		}

		h1 {
			font-size: 2.25rem;
			font-weight: bold;
		}
	}
</style>
