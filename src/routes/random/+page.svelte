<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'Random number generator',
		description: 'Generate a series of numbers from 0-255',
		url: 'random'
	};
</script>

<script lang="ts">
	function getRandomNumbers(length: number): Uint8Array {
		if (length <= 0) throw Error("Length must be greater than 0");

		const arr = new Uint8Array(length);

		return crypto.getRandomValues(arr);
	}

	let numbers = getRandomNumbers(8)
</script>

<button on:click={() => numbers = getRandomNumbers(8)}>Generate random numbers</button>

<p>{numbers.join(", ")}</p>