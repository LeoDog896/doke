<script lang="ts">
	const morseReference: { [key: string]: string } = {
		'.-': 'a',
		'-...': 'b',
		'-.-.': 'c',
		'-..': 'd',
		'.': 'e',
		'..-.': 'f',
		'--.': 'g',
		'....': 'h',
		'..': 'i',
		'.---': 'j',
		'-.-': 'k',
		'.-..': 'l',
		'--': 'm',
		'-.': 'n',
		'---': 'o',
		'.--.': 'p',
		'--.-': 'q',
		'.-.': 'r',
		'...': 's',
		'-': 't',
		'..-': 'u',
		'...-': 'v',
		'.--': 'w',
		'-..-': 'x',
		'-.--': 'y',
		'--..': 'z',
		'.----': '1',
		'..---': '2',
		'...--': '3',
		'....-': '4',
		'.....': '5',
		'-....': '6',
		'--...': '7',
		'---..': '8',
		'----.': '9',
		'-----': '0',
		'/': ' '
	};

	let input = '';

	function parseMorse(input: string): string {
		return input
			.split(' ')
			.map((it) => morseReference[it])
			.join('');
	}

	$: result = parseMorse(input);
</script>

<h1>Morse Code Decoder</h1>

<input bind:value={input} placeholder="Enter input" />

<p>{result}</p>
