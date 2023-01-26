<script lang="ts">
	let toEncode = "";
	let toDecode = "";
	
	// from https://www.ibm.com/docs/en/iis/9.1?topic=tables-ebcdic-ascii
	const table = {
		80: " ",
		81: "a",
		82: "b",
		83: "c",
		84: "d",
		85: "e",
		86: "f",
		87: "g",
		88: "h",
		89: "i",
		91: "j",
		92: "k",
		93: "l",
		94: "m",
		95: "n",
		96: "o",
		97: "p",
		98: "q",
		99: "r",
		"A1": "∞",
		"A2": "s",
		"A3": "t",
		"A4": "u",
		"A5": "v",
		"A6": "w",
		"A7": "x",
		"A8": "y",
		"A9": "z",
		"C1": "A",
		"C2": "B",
		"C3": "C",
		"C4": "D",
		"C5": "E",
		"C6": "F",
		"C7": "G",
		"C8": "H",
		"C9": "I",
		"D1": "J",
		"D2": "K",
		"D3": "L",
		"D4": "M",
		"D5": "N",
		"D6": "O",
		"D7": "P",
		"D8": "Q",
		"D9": "R",
		"E0": "/",
		"E1": " ",
		"E2": "S",
		"E3": "T",
		"E4": "U",
		"E5": "V",
		"E6": "W",
		"E7": "X",
		"E8": "Y",
		"E9": "Z",
		"F0": "0",
		"F1": "1",
		"F2": "2",
		"F3": "3",
		"F4": "4",
		"F5": "5",
		"F6": "6",
		"F7": "7",
		"F8": "8",
		"F9": "9",
	}
	
	const reversedTable = Object.fromEntries(Object.entries(table).map(([key, value]) => [value, key]));

	function encode(input: string) {
		return input.split("").map(char => reversedTable[char]).join(" ");
	}

	function decode(input: string) {
		const newTable = table as Record<string, string>;
		return input.split(" ").map(char => newTable[char]).join("");
	}
</script>

<h1>Encode EBCDIC</h1>
<input bind:value={toEncode} placeholder="Enter Input" />
<p>{encode(toEncode)}</p>

<h1>Decode EBCDIC</h1>
<input bind:value={toDecode} placeholder="Enter Input" />
<p>{decode(toDecode)}</p>

