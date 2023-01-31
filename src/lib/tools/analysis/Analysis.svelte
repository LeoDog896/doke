<script lang="ts">
	import { englishOptions } from '$lib/english';
	import { score } from '$lib/analysis';
	let toScore = '';
</script>

<h1>Text Analysis</h1>

<p>Score text based on how likely it is to be English</p>

<input bind:value={toScore} placeholder="Enter Input" />

<p>{score(toScore, englishOptions)}</p>
