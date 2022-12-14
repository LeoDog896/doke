<script lang="ts" context="module">
	import { encode, decode } from "@leodog896/vigenere-cipher"
</script>

<script lang="ts">
	let toEncode = '';
	let toEncodeKey = '';

	let toDecode = '';
	let toDecodeKey = '';

	$: encoded = toEncode.length != 0 && toEncodeKey.length != 0 ? encode(toEncode, toEncodeKey) : '';
	$: decoded = toDecode.length != 0 && toDecodeKey.length != 0 ? decode(toDecode, toDecodeKey) : '';
</script>

<h1>Vigenere Cipher Encoder</h1>

<input bind:value={toEncode} placeholder="Enter Input" />
<input bind:value={toEncodeKey} placeholder="Enter Key" />

<p>{encoded}</p>

<h1>Vigenere Cipher Decoder</h1>

<input bind:value={toDecode} placeholder="Enter Input" />
<input bind:value={toDecodeKey} placeholder="Enter Key" />

<p>{decoded}</p>
