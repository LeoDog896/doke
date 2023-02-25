<script lang="ts">
	import type { Options } from "$lib/analysis";
	import { score } from "$lib/analysis";

	type T = $$Generic<unknown[]>;

	export let input: string;
	export let options: Options
	export let generator: (...args: T) => string;
	export let paramGenerator: (input: string) => T[];
	export let paramShower: (params: T) => string = params => params.join(", ");

	interface Item {
		params: T;
		text: string;
		score: number;
	}

	let items: Item[] = []
	$: if (input) {
		items = paramGenerator(input).map(params => {
			const result = generator(...params)

			return {
				params,
				text: result,
				score: score(result, options)
			}
		}).sort((a, b) => b.score - a.score)
	}
</script>

<h2>Auto Decoder</h2>

{#if input}
	{#each items as item}
		<p>{item.text} ({item.score}) - {paramShower(item.params)}</p>
	{/each}
{/if}