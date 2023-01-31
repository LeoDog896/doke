<script lang="ts">
	import { englishOptions } from "$lib/english";

	function a1z26Encode(text: string, separator: string) {
		return text
			.toLowerCase()
			.replace(/[^a-z]/g, "")
			.split("")
			.map((char) => englishOptions.alphabet.indexOf(char) + 1)
			.join(separator);
	}

	function a1z26Decode(text: string, separator: string) {
		return text
			.split(separator)
			.map((char) => englishOptions.alphabet[parseInt(char) - 1])
			.join("");
	}

	let toEncode = "";
	let toEncodeSeparator = " ";

	let toDecode = "";
	let toDecodeSeparator = " ";
</script>

<h1>A1Z26 Encoder</h1>

<label for="toEncodeSeparator">Separator:</label>
<input
	bind:value={toEncodeSeparator}
	id="toEncodeSeparator"
	type="text"
	placeholder="Separator"
/>

<br/><br/>

<label for="toEncode">Input: </label>
<input bind:value={toEncode} id="toEncode" type="text" placeholder="Text to encode" />

<p>{a1z26Encode(toEncode, toEncodeSeparator)}</p>

<h1>A1Z26 Decoder</h1>

<label for="toDecodeSeparator">Separator:</label>
<input
	bind:value={toDecodeSeparator}
	id="toDecodeSeparator"
	type="text"
	placeholder="Separator"
/>

<br/><br/>

<label for="toDecode">Input: </label>
<input bind:value={toDecode} id="toDecode" type="text" placeholder="Text to decode" />

<p>{a1z26Decode(toDecode, toDecodeSeparator)}</p>
