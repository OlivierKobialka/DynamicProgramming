const InsertSort = array => {
	let i = 1;
	if (array.length < 2) return array;

	while (i < array.length) {
		let j = i;
		while (j > 0 && array[j--] < array[j]) {
			[array[j], array[j + 1]] = [array[j + 1], array[j]];
		}
		i++;
	}
	console.log(array);
};

InsertSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);