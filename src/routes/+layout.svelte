<script lang="ts">
	import '../app.css';

	import { getPages } from '$lib/pages'; // Path to the utility function

	const { url } = import.meta;
	const modules = import.meta.glob('./**/*.svelte'); // Include subfolder

	const pages = getPages(url, modules);

	$: filteredPages = pages.filter(name => name.includes(searchValue.toLowerCase()))

	let searchValue = '';
</script>

<div class="container">
	<ul class="list">
		<input size={Math.max(...pages.map(it => it.length))} placeholder="Search..." type="text" bind:value={searchValue}/>
		{#each filteredPages as page}
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

	input {
		background-color: rgba(0, 0, 0, 0);
		border: 0;
		color: white;
		border-bottom: 2px solid white;
		padding: 1rem;
		font-size: 1.1rem;
		width: auto;
	}

	::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}

	.container {
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
		overflow: scroll;
	}

	.list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		height: 100%;
		display: block;
		background-color: #7192BE;
		color: white;

		li {
			display: block;
			padding: 1rem;

			a {
				display: block;
				color: white;
				width: 100%;
				text-align: center;
				text-decoration: none;
			}
		}
	}

	.content {
		margin: 3rem;
		max-height: 100vh;
		overflow: scroll;
	}
</style>
