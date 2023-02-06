//! Iterative Solution
const depthFirstPrint = (graph, source) => {
	const stack = [source];

	while (stack.length > 0) {
		const current = stack.pop();
		console.log(current);

		for (let neighbour of graph[current]) {
			stack.push(neighbour);
		}
	}
};

//! Recursive Solution
const depthFirstPrint = (graph, source) => {
	console.log(source);
	for (let neighbour of graph[source]) {
		depthFirstPrint(graph, neighbour);
	}
};

const graph = {
	a: ["b", "c"],
	b: ["d"],
	c: ["e"],
	d: ["f"],
	e: [],
	f: [],
};

depthFirstPrint(graph, "a");