<script lang="ts">
	import { englishOptions } from "$lib/english";
	import AutoDecoder from "$lib/analysis/AutoDecoder.svelte";

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

				const cycledCharacter = alphabet
				[(alphabet.indexOf(lowerChar) * slope + intercept) % alphabet.length];

				return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
			})
			.join('');
	}

	function xgcd(a: number, b: number): [number, number, number] { 
		if (b == 0) {
			return [1, 0, a];
		}

		let [x, y, d] = xgcd(b, a % b);
		return [y, x-y*Math.floor(a/b), d];
	}

	function decrypt(text: string, slope: number, intercept: number): string {
		const alphabet = englishOptions.alphabet;

		return text
			.split('')
			.map((character) => {
				const lowerChar = character.toLowerCase();
				if (!alphabet.includes(lowerChar)) return character;

				const isUpperCase = character == character.toUpperCase();

				const modularMultiplicative = xgcd(slope, alphabet.length)[0];
				const cycledCharacter = alphabet[
					modularMultiplicative * (alphabet.indexOf(lowerChar) - intercept) % alphabet.length
				];

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
	<p>encrypted: {encrypt(input, slope, intercept)}</p>
	<p>decrypted: {decrypt(encrypt(input, slope, intercept), slope, intercept)}</p>
{:else}
	{@const length = englishOptions.alphabet.length}
	{#if slope < 0}
		<p>Slope must be positive</p>
	{:else if slope > length}
		<p>Slope must be less than {length}</p>
	{:else}
		<p>Slope must be <abbr title="two numbers with a highest common factor of 1">coprime</abbr> with {length}</p>
	{/if}
{/if}

<!-- <AutoDecoder
	input={input}
	options={englishOptions}
	generator={encrypt}
	paramGenerator={([input]) => [[input, slope, intercept]]}
	paramShower={([input, slope, intercept]) => `Slope: ${slope}, Intercept: ${intercept}`}
/> -->