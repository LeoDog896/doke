<script lang="ts">
	const md5 = (text: string) => /^[a-f0-9]{32}$/.test(text);

	let input = '';
</script>

<h1>Identify</h1>

<p>Programatically determine what type of cipher something is</p>

<input bind:value={input} />

{#if md5(input)}
	<p>Valid MD5 hash</p>
{/if}
