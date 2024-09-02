<script lang="ts" context="module">
	import {
		compress,
		compressToBase64,
		compressToEncodedURIComponent,
		compressToUTF16,
		compressToUint8Array,
		
		decompress,
		decompressFromBase64,
		decompressFromEncodedURIComponent,
		decompressFromUTF16,
		decompressFromUint8Array
	} from "lz-string";
</script>

<script lang="ts">
	let toEncode = '';

	let toDecode = '';

	const pairedOptions = {
		'no-encoding': {
			compress,
			decompress
		},
		'base64': {
			compress: compressToBase64,
			decompress: decompressFromBase64
		},
		'encodedURIComponent': {
			compress: compressToEncodedURIComponent,
			decompress: decompressFromEncodedURIComponent
		},
		'utf16': {
			compress: compressToUTF16,
			decompress: decompressFromUTF16
		},
		'uint8array': {
			compress: str => [...compressToUint8Array(str)].join(" "),
			decompress: str => decompressFromUint8Array(new Uint8Array(str.split(" ").map(int => parseInt(int))))
		}
	} satisfies Record<string, {
		compress: (str: string) => string,
		decompress: (str: string) => string
	}>

	const options = Object.keys(pairedOptions);

	let option: keyof typeof pairedOptions = 'no-encoding';
	$: optionPair = pairedOptions[option]

	$: encoded = optionPair.compress(toEncode)
	$: decoded = optionPair.decompress(toDecode)
</script>

<select bind:value={option}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<h1>To lz-string</h1>

<input bind:value={toEncode} placeholder="Enter Input" />

<p>{encoded}</p>

<h1>From lz-string</h1>

<input bind:value={toDecode} placeholder="Enter Input" />

<p>{decoded}</p>

<h1>About lz-string</h1>

<p>
	<a href="https://github.com/pieroxy/lz-string">lz-string</a> is an implementation of <a href="https://glinscott.github.io/lz/index.html">lz</a>-based compression for different languages.
</p>