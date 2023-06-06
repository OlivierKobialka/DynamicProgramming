const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function numberToWord(number) {
	// Define word arrays for numbers up to 19 and for tens
	const units = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];

	const tens = [
		"",
		"",
		"twenty",
		"thirty",
		"forty",
		"fifty",
		"sixty",
		"seventy",
		"eighty",
		"ninety",
	];

	// Function to convert a two-digit number to its word representation
	function convertTwoDigit(number) {
		if (number < 20) {
			return units[number];
		} else {
			const unit = number % 10;
			const ten = Math.floor(number / 10);
			return tens[ten] + (unit !== 0 ? "-" + units[unit] : "");
		}
	}

	// Handle special cases for zero and negative numbers
	if (number === 0) {
		return "zero";
	} else if (number < 0) {
		return "minus " + numberToWord(-number);
	}

	// Convert the number to its word representation
	let word = "";

	// Handle billions
	if (number >= 1000000000) {
		word += numberToWord(Math.floor(number / 1000000000)) + " billion ";
		number %= 1000000000;
	}

	// Handle millions
	if (number >= 1000000) {
		word += numberToWord(Math.floor(number / 1000000)) + " million ";
		number %= 1000000;
	}

	// Handle thousands
	if (number >= 1000) {
		word += numberToWord(Math.floor(number / 1000)) + " thousand ";
		number %= 1000;
	}

	// Handle hundreds
	if (number >= 100) {
		word += numberToWord(Math.floor(number / 100)) + " hundred ";
		number %= 100;
	}

	// Handle tens and units
	if (number > 0) {
		word += convertTwoDigit(number);
	}

	return word.trim();
}

rl.question("Enter an integer: ", input => {
	const number = parseInt(input);
	const word = numberToWord(number);
	console.log(word);
	rl.close();
});
