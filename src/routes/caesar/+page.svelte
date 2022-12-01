<script lang="ts" context="module">
	const caesar = (text: string, shift: number): string => {
		if (shift < 0) {
			shift = 26 + (shift % 26);
		}
		
		const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

		return text.split("").map(character => {
			const lowerChar = character.toLowerCase();
			if (!alphabet.includes(lowerChar)) return character;

			const isUpperCase = character == character.toUpperCase();

			const cycledCharacter = alphabet[(alphabet.indexOf(lowerChar) + shift) % alphabet.length];

			console.log(character + cycledCharacter)

			return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
		}).join("")
	}
</script>

<script lang="ts">
	let input = ''
	let amount = 0;

	$: result = caesar(input, amount)
</script>

<h1>Caesar Cipher</h1>

<input bind:value={input} placeholder="Enter Input">
<input bind:value={amount} type="number">

<p>{result}</p>