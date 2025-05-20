function analyzeArray(arr) {
	const min = (arr) => {
		return arr.reduce((prev, curr) => {
			return prev > curr ? curr : prev;
		}, Infinity);
	};

	const max = (arr) => {
		return arr.reduce((prev, curr) => {
			return prev < curr ? curr : prev;
		}, -Infinity);
	};

	const average = (arr) => {
		let sum = arr.reduce((prev, curr) => {
			return prev + curr;
		}, 0);
		return sum / arr.length;
	};
	if (arr.length === 0) return { min: undefined, max: undefined, average: NaN, length: 0 };
	else return { min: min(arr), max: max(arr), average: average(arr), length: arr.length };
}

export { analyzeArray };
