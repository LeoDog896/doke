<script lang="ts">
	let toEncrypt = '';

	$: encryptedResult = window.btoa(toEncrypt);

	let toDecrypt = '';

	let decryptedResult = '';

	$: {
		try {
			decryptedResult = window.atob(toDecrypt);
		} catch {
			decryptedResult = 'Result could not be decrypted.';
		}
	}
</script>

<h1>Base64 encryption</h1>

<input bind:value={toEncrypt} />

<p>{encryptedResult}</p>

<h1>Base64 decryption</h1>

<input bind:value={toDecrypt} />

<p>{decryptedResult}</p>
