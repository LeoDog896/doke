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
</script>

<h1>{info.name}</h1>

<input placeholder="Enter Input" bind:value={input} />

<p>{md5(input)}</p>
