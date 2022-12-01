<script lang="ts">
	const caesar = (text: string, cycle: number): string => {
		const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

		return text.split("").map(character => {
			const lowerChar = character.toLowerCase();
			if (!alphabet.includes(lowerChar)) return character;

			const isUpperCase = character == character.toUpperCase();

			const cycledCharacter = alphabet[(alphabet.indexOf(lowerChar) + cycle) % alphabet.length];

			console.log(character + cycledCharacter)

			return isUpperCase ? cycledCharacter.toUpperCase() : cycledCharacter;
		}).join("")
	}

	let input = ''
	let amount = 0;

	$: result = caesar(input, amount)
</script>

<h1>Caesar Cipher</h1>

<input bind:value={input} placeholder="Enter Input">
<input bind:value={amount} type="number">

<p>{result}</p>