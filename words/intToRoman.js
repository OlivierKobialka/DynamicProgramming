/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
	const roman = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I",
	];
	const int = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	let str = "";
	for (let i = 0; i < roman.length; i++) {
		while (num >= int[i]) {
			num -= int[i];
			str += roman[i];
		}
	}
	return str;
};
