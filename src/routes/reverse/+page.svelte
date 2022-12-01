<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'Reverse text',
		description: 'Reverse any given text',
		url: 'reverse'
	};
</script>

<script lang="ts">
	let input = '';
	$: reverse = input.split("").reverse().join("")
</script>

<h1>Reverse Text</h1>

<input bind:value={input} placeholder="Enter Input" />
<p>{reverse}</p>