<script lang="ts">
	let toFind = '';

	$: chars = [...new Set(toFind.split(''))].join('');
</script>

<h1>Unique Character Finder</h1>

<input bind:value={toFind} placeholder="Enter Input" />

<p>Chars: "{chars}"</p>
