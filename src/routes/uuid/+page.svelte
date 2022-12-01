<script lang="ts">
	let result = crypto.randomUUID();
</script>

<button on:click={() => result = crypto.randomUUID()}>Generate random UUID</button>

<p>{result}</p>