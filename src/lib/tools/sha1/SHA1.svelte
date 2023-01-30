<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'SHA1 Hasher',
		description: 'Easily hash text into SHA1',
		url: 'sha1'
	};

	let files: FileList;
	let file;
</script>

<script lang="ts">
	import sha1 from 'sha1';

	let input = '';
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />
<br /><br />
<input name="file" type="file" bind:files />

{#if files}
	{#await Array.from(files)[0].arrayBuffer()}
		<p>Loading buffer...</p>
	{:then buffer}
		<p>{sha1(new TextDecoder('utf-8').decode(new Uint8Array(buffer)))}</p>
	{:catch error}
		<pre>{error}</pre>
	{/await}
{:else}
	<p>{sha1(input)}</p>
{/if}
