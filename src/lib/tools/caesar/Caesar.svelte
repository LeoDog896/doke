<script lang="ts" context="module">
	import { englishOptions } from '$lib/english';
	import AutoDecoder from '$lib/analysis/AutoDecoder.svelte';

	const caesar = (text: string, shift: number): string => {
		if (shift < 0) {
			shift = 26 + (shift % 26);
		}

		const alphabet = englishOptions.alphabet;

		return text
			.split('')
			.map((character) => {
				const lowerChar = character.toLowerCase();
				if (!alphabet.includes(lowerChar)) return character;

				const isUpperCase = character == character.toUpperCase();

				const cycledCharacter = alphabet[(alphabet.indexOf(lowerChar) + shift) % alphabet.length];

				return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
			})
			.join('');
	};
</script>

<script lang="ts">
	let input = '';
	let amount = 0;

	$: result = caesar(input, amount);

	function paramGenerator(input: string): [string, number][] {
		return Array.from({ length: 26 }, (_, i) => i).map(i => [input, i])
	}
</script>

<h1>Caesar Cipher</h1>

<input bind:value={input} placeholder="Enter Input" />
<input bind:value={amount} type="number" />

<p>{result}</p>

<AutoDecoder
	input={input}
	options={englishOptions}
	generator={caesar}
	{paramGenerator}
	paramShower={([input, amount]) => `Shift: ${amount}`}
/>