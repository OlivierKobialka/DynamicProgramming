//! Breadth First Solution (Iterative)
// const hasPath = (graph, source, dst) => {
// 	const queue = [source];

// 	while (queue.length > 0) {
// 		const current = queue.shift();

// 		if (current === dst) return true;

// 		for (let neighbour of graph[current]) {
// 			queue.push(neighbour);
// 		}
// 	}
//     return false;
// };

//! Deapth First Solution (Recursive)
const hasPath = (graph, source, dst) => {
	if (source === dst) return true;

	for (let neighbour of graph[source]) {
		console.log(neighbour);

		if (hasPath(graph, neighbour, dst) === true) {
			return true;
		}
	}
	return false;
};

const graph = {
	f: ["g", "i"],
	g: ["h"],
	h: [],
	i: ["g", "k"],
	j: ["i"],
	k: [],
};
console.log("TESTCASE 1: (true)");
hasPath(graph, "f", "k");

console.log("TESTCASE 2: (false)");
hasPath(graph, "f", "j");

console.log("TESTCASE 3: (true)");
hasPath(graph, "i", "h");
