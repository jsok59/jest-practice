function capitalize(string) {
	const arr = string.split(" ");
	return arr.reduce((prev, curr) => {
		prev === "" ? prev + curr.slice(0, 1) + curr.slice(1) : prev + " " + curr.slice(0, 1) + curr.slice(1);
	}, "");
}

export { capitalize };
