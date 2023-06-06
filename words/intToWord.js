const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function numberToWord(number) {
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

	function convertTwoDigit(number) {
		if (number < 20) {
			return units[number];
		} else {
			const unit = number % 10;
			const ten = Math.floor(number / 10);
			return tens[ten] + (unit !== 0 ? "-" + units[unit] : "");
		}
	}

	if (number === 0) {
		return "zero";
	} else if (number < 0) {
		return "minus " + numberToWord(-number);
	}

	let word = "";

	if (number >= 1000000000) {
		word += numberToWord(Math.floor(number / 1000000000)) + " billion ";
		number %= 1000000000;
	}

	if (number >= 1000000) {
		word += numberToWord(Math.floor(number / 1000000)) + " million ";
		number %= 1000000;
	}

	if (number >= 1000) {
		word += numberToWord(Math.floor(number / 1000)) + " thousand ";
		number %= 1000;
	}

	if (number >= 100) {
		word += numberToWord(Math.floor(number / 100)) + " hundred ";
		number %= 100;
	}

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
