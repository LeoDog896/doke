<script lang="ts">
	let toEncrypt = '';

	$: encryptedResult = globalThis.btoa(toEncrypt);

	let toDecrypt = '';

	let decryptedResult = '';

	$: {
		try {
			decryptedResult = globalThis.atob(toDecrypt);
		} catch {
			decryptedResult = 'Result could not be decrypted.';
		}
	}
</script>

<h1>Base64 encryption</h1>

<input bind:value={toEncrypt} placeholder="Enter Input" />

<p>{encryptedResult}</p>

<h1>Base64 decryption</h1>

<input bind:value={toDecrypt} placeholder="Enter Input" />

<p>{decryptedResult}</p>
