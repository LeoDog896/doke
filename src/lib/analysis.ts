type FrequencyTable = Record<string, number>;

const englishFrequencyTable: FrequencyTable = {
	e: 12.02,
	t: 9.1,
	a: 8.12,
	o: 7.68,
	i: 7.31,
	n: 6.95,
	s: 6.28,
	r: 6.02,
	h: 5.92,
	d: 4.32,
	l: 3.98,
	u: 2.88,
	c: 2.71,
	m: 2.61,
	f: 2.3,
	y: 2.11,
	w: 2.09,
	g: 2.03,
	p: 1.82,
	b: 1.49,
	v: 1.11,
	k: 0.69,
	x: 0.17,
	q: 0.11,
	j: 0.1,
	z: 0.07
};

interface Options {
	frequencyTable: FrequencyTable;
}

const englishOptions: Options = {
	frequencyTable: englishFrequencyTable
};

// Scores a word based on how "english" it is
export function score(text: string, options = englishOptions) {
	// first, transform the text into lower-case letters only
	const letters = text
		.toLowerCase()
		.replace(/[^a-z]/g, '')
		.split('');

	if (letters.length === 0) {
		return 0;
	}

	// then, map each letter to its amount of occurrences
	const letterCounts = letters.reduce((counts, letter) => {
		counts[letter] = (counts[letter] || 0) + 1;
		return counts;
	}, <Record<string, number>>{});

	// calculate the percentage of each letter
	const textFrequency = Object.entries(letterCounts).reduce((percentages, [letter, count]) => {
		percentages[letter] = count / letters.length;
		return percentages;
	}, <Record<string, number>>{});

	// calculate the sum of the differences between the text's letter frequencies and the english letter frequencies
	const score = Object.entries(textFrequency).reduce((sum, [letter, frequency]) => {
		return sum + Math.abs(frequency - (options.frequencyTable[letter] || 0));
	}, 0);

	return score;
}
