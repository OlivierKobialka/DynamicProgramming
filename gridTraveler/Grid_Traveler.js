//! Memoized Solution
const gridTraveler = (m, n, memo = {}) => {
	const key = m + "," + n;
	// are the arguments in the memo?
	if (key in memo) return memo[key];
	if (m === 1 && n === 1) return 1;
	if (m === 0 || n === 0) return 0;
	memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
	return memo[key];
};

//? O^(m*n) Time | O^(m*n) Space

//! SLOW SOLUTION
// const gridTraveler = (m, n) => {
// 	if (m === 1 && n === 1) return 1;
// 	if (m === 0 || n === 0) return 0;
// 	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(13, 40));
