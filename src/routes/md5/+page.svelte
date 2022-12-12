<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'MD5 Text Encryptor',
		description: 'Easily encrypt text into MD5',
		url: 'md5'
	};
</script>

<script lang="ts">
	import md5 from 'md5';

	let input = '';
	let files: FileList;
	let file;
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />
<input name="file" type="file" bind:files />

{#if files}
	{#await Array.from(files)[0].arrayBuffer()}
		<p>Loading buffer...</p>
	{:then buffer}
		<p>{md5(new TextDecoder("utf-8").decode(new Uint8Array(buffer)))}</p>
	{:catch error}
		<pre>{error}</pre>
	{/await}
{:else}
	<p>{md5(input)}</p>
{/if}
