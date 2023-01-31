<script lang="ts">
	import { englishOptions } from "$lib/english";

	let input = '';
	let slope: number = 1;
	let intercept: number = 0;

	function gcd(a: number, b: number): number {
		if (b == 0) return a;
		return gcd(b, a % b);
	}

	function verifySlope(slope: number): boolean {
		return slope > 0 && slope < 26 && gcd(slope, 26) == 1;
	}

	function encrypt(text: string, slope: number, intercept: number): string {
		const alphabet = englishOptions.alphabet;

		return text
			.split('')
			.map((character) => {
				const lowerChar = character.toLowerCase();
				if (!alphabet.includes(lowerChar)) return character;

				const isUpperCase = character == character.toUpperCase();

				const cycledCharacter = alphabet[(alphabet.indexOf(lowerChar) * slope + intercept) % alphabet.length];

				return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
			})
			.join('');
	}


</script>

<h1>Affine Cipher</h1>

<p>Enter a message and two numbers to encode it with the Affine Cipher</p>

<label for="slope">Slope:</label>
<input bind:value={slope} min=0 type="number" id="slope" placeholder="Enter Slope" />
<br/><br/>
<label for="intercept">Intercept:</label>
<input bind:value={intercept} type="number" id="intercept" placeholder="Enter Intercept" />
<br/><br/><br/>

<label for="input">Input:</label>
<input id="input" bind:value={input} placeholder="Enter Input" />

{#if verifySlope(slope)}
	<p>{encrypt(input, slope, intercept)}</p>
{:else}
	{@const length = englishOptions.alphabet.length}
	{#if slope < 0}
		<p>Slope must be positive</p>
	{:else if slope > length}
		<p>Slope must be less than {length}</p>
	{:else}
		<p>Slope must be coprime with {length}</p>
	{/if}
{/if}