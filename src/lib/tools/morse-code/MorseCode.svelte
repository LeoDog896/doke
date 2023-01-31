<script lang="ts">
	function invert<K extends string | number | symbol, V extends string | number | symbol>(obj: {
		[key in K]: V;
	}): Record<V, K> {
		const entries = Object.entries(obj) as [K, V][];
		return Object.assign({}, ...entries.map(([a, b]) => ({ [b]: a })));
	}

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
		'.-...': '&',
		'.----.': "'",
		'-.--.-': '(',
		'-.--.': ')',
		'---...': ':',
		'--..--': ',',
		'-...-': '-',
		'-.-.--': '!',
		'.-.-.-': '.',
		'-....-': '-',
		'.-..-.': '"',
		'..--..': '?',
		'-..-.': '/',
		'/': ' '
	};

	const invertedMorseReference = invert<string, string>(morseReference);

	let toDecode = '';
	let toEncode = '';

	function decodeMorse(morse: string): string {
		return morse
			.split(' ')
			.map((it) => morseReference[it])
			.join('');
	}

	function encodeMorse(input: string): string {
		return input
			.toLowerCase()
			.split('')
			.map((it) => invertedMorseReference[it] ?? '')
			.join(' ');
	}

	$: decoded = decodeMorse(toDecode);
	$: encoded = encodeMorse(toEncode);
</script>

<h1>Morse Code Encoder</h1>
<input bind:value={toEncode} placeholder="Enter input to encode" />

<p>{encoded}</p>

<h1>Morse Code Decoder</h1>

<input bind:value={toDecode} placeholder="Enter input to decode" />

<p>{decoded}</p>
