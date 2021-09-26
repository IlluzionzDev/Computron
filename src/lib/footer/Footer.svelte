<script lang="ts">
	import background from './bottom-waves-2.svg';
</script>

<footer>
	<img src={background} alt="Background" class="footer-background" />
	<div class="footer-container">
		<div class="container">
			<div class="footer-row">
				<div class="footer-section">
					<div class="footer-content-1">
						<p>Contact</p>
                        <p>Email - josh@computron.co.nz</p>
                        <p>Mobile - 022 342 0971</p>
					</div>
				</div>
				<div class="footer-section">
                    <div class="footer-content-2">
						<h1>Computron</h1>
					</div>
				</div>
				<div class="footer-section">
                    <div class="footer-content-3">
						<p>Designed by Jamin Stratford</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>

<!-- Css specific to this component -->
<style lang="scss">
	@import '../../css/colors.scss';
	@import '../../css/include-media.scss';

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}

	.footer-background {
		width: 100vw;
		z-index: -999;
	}

	.footer-container {
		background-color: $primary-blue;
		width: 100%;
	}

	.footer-row {
		display: flex;
		flex-direction: row;
		padding: 50px 0;

		& .footer-section {
			display: flex;
			// To ensure spaced evenly
			flex: 1;
			flex-direction: column;

			align-items: center;
			justify-content: center;
			position: relative;

			font-family: Mulish;
			font-size: 1rem;

			@include media('<455px') {
				font-size: 0.7rem;
			}

            // Each part of the footer content
			& .footer-content {
				&-1 {
                    text-align: left;
					margin-right: auto;
				}

				&-3 {
                    margin-left: auto;
                    text-align: right;
				}
			}
		}
	}
</style>
