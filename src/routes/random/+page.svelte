<script lang="ts">
	function getRandomNumbers(length: number): Uint8Array {
		if (length <= 0) throw Error("Length must be greater than 0");

		const arr = new Uint8Array(length);

		return crypto.getRandomValues(arr);
	}

	let numbers = getRandomNumbers(8)
</script>

<button on:click={() => numbers = getRandomNumbers(8)}>Generate random numbers</button>

<p>{numbers.join(", ")}</p>