function capitalize(string) {
	const arr = string.split(" ");
	return arr.reduce((prev, curr) => {
		return prev.length === 0 ? prev + curr.slice(0, 1).toUpperCase() + curr.slice(1) : prev + " " + curr.slice(0, 1).toUpperCase() + curr.slice(1);
	}, "");
}

export { capitalize };
