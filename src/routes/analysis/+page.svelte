<script lang="ts">
	import { score } from "$lib/analysis";
	let toScore = '';
</script>

<h1>Text Analysis</h1>

<input bind:value={toScore} placeholder="Enter Input" />

<p>{score(toScore)}</p>