<script lang="ts" context="module">
	import type { PageInfo } from 'src/lib/pageInfo';

	export const info: PageInfo = {
		name: 'SHA2-256 Text Encryptor',
		description: 'Easily encrypt text into SHA2-256',
		url: 'sha2-256'
	};
</script>

<script lang="ts">
	import sha256 from 'sha256';

	let input = '';
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />

<p>{sha256(input)}</p>
