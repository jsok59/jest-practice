function caesarCipher(string, num) {
	const arr = string.split("");
	return arr
		.reduce((prev, curr) => {
			let index = helperObject.lowercase.indexOf(curr);
			if (index !== -1) {
				prev.push(helperObject.lowercase[shiftIndex(index, num)]);
				return prev;
			}

			let indexUpperCase = helperObject.uppercase.indexOf(curr);
			if (indexUpperCase !== -1) {
				prev.push(helperObject.uppercase[shiftIndex(indexUpperCase, num)]);
				return prev;
			}

			prev.push(curr);
			return prev;
		}, [])
		.join("");
}

function shiftIndex(i, num) {
	return (i + num) % 26;
}

const helperObject = {
	lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

	uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
};

export { caesarCipher, helperObject, shiftIndex };
