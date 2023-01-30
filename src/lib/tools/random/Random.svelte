<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'Random number generator',
		description: 'Generate a series of numbers from 0-255',
		url: 'random'
	};
</script>

<script lang="ts">
	function getRandomNumbers(length: number): string {
		try {
			if (length <= 0) throw Error('Length must be greater than 0');

			const arr = new Uint8Array(length);

			return crypto.getRandomValues(arr).join(', ');
		} catch (e) {
			return `An error occured trying to process this: ${e}`;
		}
	}

	let length = 8;
	let trigger = Symbol();
	$: numbers = trigger && getRandomNumbers(Math.max(length, 1));
</script>

<input type="number" min="1" max="65536" bind:value={length} />

<button on:click={() => (trigger = Symbol())}>Generate random numbers</button>

<p>{numbers}</p>
