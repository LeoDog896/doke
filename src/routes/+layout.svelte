<script lang="ts">
	import '../app.css';

	import { getPages } from '$lib/pages'; // Path to the utility function

	const { url } = import.meta;
	const modules = import.meta.glob('./**/*.svelte'); // Include subfolder

	const pages = getPages(url, modules);
</script>

<div class="container">
	<ul class="list">
		{#each pages as page}
			<li>
				<a href={'/doke/' + page}>{page}</a>
			</li>
		{/each}
	</ul>

	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	.container {
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
	}

	.list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		height: 100%;
		border-right: 1px solid gray;
		display: block;

		li {
			display: block;
			padding: 1rem;

			a {
				display: block;
				width: 100%;
				text-align: center;
				text-decoration: none;
			}
		}
	}

	.content {
		margin: 3rem;
	}
</style>
