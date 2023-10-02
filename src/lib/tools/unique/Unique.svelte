<script lang="ts">
	let toFind = '';

	$: chars = [...new Set(toFind.split(''))].join('');
</script>

<h1>Unique Character Finder</h1>

<input bind:value={toFind} placeholder="Enter Input" />

<p>Chars: <code>{chars}</code></p>

<style>
	code {
		background: #eee;
		padding: 0.25rem;
		border-radius: 0.25rem;
	}
</style>
