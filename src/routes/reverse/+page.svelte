<script lang="ts">
	let input = '';
	$: reverse = input.split("").reverse().join("")
</script>

<h1>Reverse Text</h1>

<input bind:value={input} placeholder="Enter Input" />
<p>{reverse}</p>