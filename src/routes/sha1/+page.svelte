<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'SHA1 Text Encryptor',
		description: 'Easily encrypt text into SHA1',
		url: 'sha1'
	};
</script>

<script lang="ts">
	import sha1 from 'sha1';

	let input = '';
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />

<p>{sha1(input)}</p>
