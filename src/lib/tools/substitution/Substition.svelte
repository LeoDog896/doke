<script lang="ts" context="module">
	const substitution = (
		text: string,
		inputAlphabet: string[],
		outputAlphabet: string[]
	): string => {
		if (inputAlphabet.length != outputAlphabet.length) {
			throw new Error('Input and Output alphabets must be the same length');
		}

		const lowerInputAlphabet = inputAlphabet.map((char) => char.toLocaleLowerCase());

		return text
			.split('')
			.map((character) => {
				const lowerChar = character.toLocaleLowerCase();
				if (!inputAlphabet.includes(lowerChar)) return character;

				return outputAlphabet[lowerInputAlphabet.indexOf(lowerChar)];
			})
			.join('');
	};
</script>

<script lang="ts">
	import { englishOptions } from '$lib/english';

	let inputAlphabetString = englishOptions.alphabet.join('');
	let outputAlphabetString = englishOptions.alphabet.join('');

	$: inputAlphabet = inputAlphabetString.split('');
	$: outputAlphabet = outputAlphabetString.split('');

	let input = '';
	$: output = substitution(input, inputAlphabet, outputAlphabet);
</script>

<input bind:value={input} placeholder="Enter Input" />
<br />
<input bind:value={inputAlphabetString} placeholder="Enter Input Alphabet" />
<br />
<input bind:value={outputAlphabetString} placeholder="Enter Output Alphabet" />
<br />

<p>{output}</p>
