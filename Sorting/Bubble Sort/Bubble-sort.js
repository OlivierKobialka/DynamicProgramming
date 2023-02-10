const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort() {
	for (let i = 0; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length - 1 - i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				let temp = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = temp;
			}
		}
	}
	console.log(numbers);
}

bubbleSort();
