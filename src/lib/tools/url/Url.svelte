<script lang="ts">
	let toEncrypt = '';
	$: encryptedResult = globalThis.encodeURI(toEncrypt);

	let toDecrypt = '';
	let decryptedResult = '';
	$: {
		try {
			decryptedResult = globalThis.decodeURI(toDecrypt);
		} catch {
			decryptedResult = 'Result could not be decrypted.';
		}
	}
</script>

<h1>URL Encoder</h1>

<input bind:value={toEncrypt} placeholder="Enter Input" />

<p>{encryptedResult}</p>

<h1>URL Decoder</h1>

<input bind:value={toDecrypt} placeholder="Enter Input" />

<p>{decryptedResult}</p>
