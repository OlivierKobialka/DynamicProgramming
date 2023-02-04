//! memoization
//? js object, keys will be arg to fn, value will be the return value
const fib = (n: number, memo: any): number => {
	if (n in memo) return memo[n];
	if (n <= 2) return 1;
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
};
console.log(fib(50, {}));

//! slow recursive solution
// const fib = (n: number): number => {
// 	if (n <= 2) return 1;
// 	return fib(n - 1) + fib(n - 2);
// };
//? O(2^n) time | O(n) space
//? fib(50) ~= 2^50 steps = 1 125 899 906 842 624 steps
