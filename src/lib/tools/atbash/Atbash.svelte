<script lang="ts">
	import { englishOptions } from "$lib/english";
	let input = '';

	function atbash(text: string): string {
		const alphabet = englishOptions.alphabet;
		const reversedAlphabet = [...alphabet].reverse();

		return text
			.split('')
			.map((character) => {
				const lowerChar = character.toLowerCase();
				if (!alphabet.includes(lowerChar)) return character;

				const isUpperCase = character == character.toUpperCase();

				const cycledCharacter = reversedAlphabet[alphabet.indexOf(lowerChar)];

				return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
			})
			.join('');
	}
</script>

<h1>Atbash Cipher</h1>

<input bind:value={input} placeholder="Enter Input" />

<p>{atbash(input)}</p>
