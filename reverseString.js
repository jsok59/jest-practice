function reverseString(string) {
	const arr = string.split("");
	return arr
		.reduce((prev, curr) => {
			prev.unshift(curr);
			return prev;
		}, [])
		.join("");
}

export { reverseString };
