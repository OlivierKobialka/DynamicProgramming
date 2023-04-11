const howSum = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderResult = howSum(remainder, numbers);
		if (remainderResult !== null) return [...remainderResult, num];
	}
	return null;
};
// m = target sum
// n = numbers.length
//
// time: O(n^m)

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(300, [95, 9, 6]));
