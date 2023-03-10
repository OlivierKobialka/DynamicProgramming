let InsertionSort = (array: number[]) => {
	let i: number = 1;
	let sortedArray: number[] = array;
	
	if (sortedArray.length < 2) return sortedArray;

	while (i < sortedArray.length) {
		let j: number = i;
		while (j > 0 && sortedArray[j--] < sortedArray[j]) {
			[sortedArray[j], sortedArray[j + 1]] = [
				sortedArray[j + 1],
				sortedArray[j],
			];
		}
		i++;
	}
	console.log(`Sorted Arr: ${sortedArray}`);
};

InsertionSort([32, 1, 42, 12, 64, 23, 6543, 23]);
