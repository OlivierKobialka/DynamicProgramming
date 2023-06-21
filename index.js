/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
    console.clear()
	const sqrt = (x, low, high) => {
		if (low > high) return high;
		const mid = Math.floor((low + high) / 2);
        console.log(`mid: ${mid} low: ${low} high: ${high}`)
		if (mid * mid === x) return mid;
		if (mid * mid > x) return sqrt(x, low, mid - 1);
		return sqrt(x, mid + 1, high);
	};

	return sqrt(x, 0, x);
};

console.log(mySqrt(8));
// console.log(mySqrt(4));
// console.log(mySqrt(1));
// console.log(mySqrt(0));
// console.log(mySqrt(2));
// console.log(mySqrt(3));
// console.log(mySqrt(5));
// console.log(mySqrt(6));
// console.log(mySqrt(7));
// console.log(mySqrt(9));
