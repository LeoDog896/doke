export type FrequencyTable = Record<string, number>;

export interface Options {
	frequencyTable: FrequencyTable;
	alphabet: string[];
}

// Scores a word based on how "english" it is
export function score(text: string, options: Options) {
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
