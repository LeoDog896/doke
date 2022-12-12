<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'SHA2-512 Text Encryptor',
		description: 'Easily encrypt text into SHA2-512',
		url: 'sha2-512'
	};
</script>

<script lang="ts">
	import sha512 from 'js-sha512';

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
		<p>{sha512(new TextDecoder("utf-8").decode(new Uint8Array(buffer)))}</p>
	{:catch error}
		<pre>{error}</pre>
	{/await}
{:else}
	<p>{sha512(input)}</p>
{/if}