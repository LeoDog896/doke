<script lang="ts" context="module">
	import { score } from '$lib/analysis';
	import { englishOptions } from '$lib/english';

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

	interface Score {
		shift: number;
		text: string;
		score: number;
	}

	let scores: Score[] = [];

	$: {
		scores = Array.from({ length: 26 }, (_, i) => {
			return {
				shift: i,
				text: caesar(input, i),
				score: score(caesar(input, i), englishOptions)
			};
		}).sort((a, b) => b.score - a.score);
	}
</script>

<h1>Caesar Cipher</h1>

<input bind:value={input} placeholder="Enter Input" />
<input bind:value={amount} type="number" />

<p>{result}</p>

<h2>Automatic Decoding</h2>

{#if input}
	{#each scores as { shift, score, text }}
		<p>{text} ({shift}): {score}</p>
	{/each}
{:else}
	<p>Enter some text above to see automatic decoding</p>
{/if}
