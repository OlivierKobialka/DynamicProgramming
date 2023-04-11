const canSum = (targetSum, numbers) => {
	if (targetSum === 0) return true;

	for (let num of numbers) {
		const remainder = targetSum - num;
		if (canSum(remainder, numbers) === true) return true;
        
	}
};

canSum(7, [2, 3]); // true
canSum(7, [5, 3, 4, 7]); // true
canSum(7, [2, 4]); // false
canSum(8, [2, 3, 5]); // true
canSum(300, [7, 14]); // false
