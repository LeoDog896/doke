<script lang="ts">
	import '../app.css';

	import { page as currentPage } from '$app/stores';

	import Fuse from 'fuse.js';
	const modules = Object.keys(import.meta.glob('../lib/tools/**/*.svelte'));

	const pages = modules.map((it) => it.split('/')[3]);

	const fuse = new Fuse(
		pages.map((page) => ({ name: page })),
		{
			threshold: 0.5,
			keys: ['name']
		}
	);

	$: filteredPages =
		searchValue.length === 0 ? pages : fuse.search(searchValue).map((it) => it.item.name);

	let searchValue = '';
</script>

<div class="container">
	<ul class="list">
		<input
			size={Math.max(...pages.map((it) => it.length))}
			placeholder="Search..."
			type="text"
			bind:value={searchValue}
		/>
		{#each filteredPages as page}
			<li>
				<a class={$currentPage.url.href.includes(page) ? 'active' : ''} href={'/doke/' + page}
					>{page}</a
				>
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

	.active {
		background-color: #3b5998;
	}

	.container {
		display: flex;
		flex-direction: row;
		max-height: 100%;
		max-width: 100%;
	}

	.list {
		margin: 0;
		padding: 0;
		list-style-type: none;
		height: 100vh;
		overflow-y: scroll;
		overflow-x: hidden;
		display: block;
		background-color: #7192be;
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
		width: 100%;
		overflow: auto;
	}
</style>
