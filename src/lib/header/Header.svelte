<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>
</header>

<style lang="scss">
	@import '../../css/colors.scss';

	header {
		display: flex;
		justify-content: space-between;
		background-color: $primary-blue;
	}
</style>
