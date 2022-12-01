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
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />

<p>{sha512(input)}</p>
