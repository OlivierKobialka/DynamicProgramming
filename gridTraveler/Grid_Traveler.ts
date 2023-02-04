/**
 *
 * @param {number} n - vertical grid size
 * @param {number} m - horizontal grid size
 */
export default function gridTraveler(n: number, m: number): number {
	const travelRecursive = (
		n: number,
		m: number,
		memo: Map<string, number>
	): number => {
		const key = n + " " + m;
		if (memo.has(key)) {
			return <number>memo.get(key);
		}

		if (n == 1 && m == 1) {
			return 1;
		}

		if (n == 0 || m == 0) {
			return 0;
		}
		memo.set(
			key,
			travelRecursive(n - 1, m, memo) + travelRecursive(n, m - 1, memo)
		);
		return <number>memo.get(key);
	};

	return travelRecursive(n, m, new Map());
}


console.log(gridTraveler(1, 1));
console.log(gridTraveler(2, 3));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
console.log(gridTraveler(13, 40));
