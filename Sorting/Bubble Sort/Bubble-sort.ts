let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

function BubbleSort() {
	for (let i = 0; i < ids.length; i++) {
		for (let j = 0; j < ids.length - 1 - i; j++) {
			if (ids[j] > ids[j + 1]) {
				let tmp = ids[j];
				ids[(j = ids[j + 1])];
				ids[j + 1] = tmp;
			}
		}
	}
	console.log(ids);
}

BubbleSort();
