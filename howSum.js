const howSum = (targetSum, numbers) => {
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5, 6]));
