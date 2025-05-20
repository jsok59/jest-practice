import { caesarCipher, helperObject, shiftIndex } from "./caesarCipher";

test("xyz", () => {
	expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("HeLLo", () => {
	expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Hello, World!", () => {
	expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

describe("caesarCiphertest", () => {
	test("wraps from z to a", () => {
		expect(caesarCipher("xyz", 3)).toBe("abc");
	});

	test("preserves case", () => {
		expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
	});

	test("ignores punctuation and spaces", () => {
		expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
	});

	test("handles full alphabet with shift", () => {
		expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 1)).toBe("bcdefghijklmnopqrstuvwxyza");
	});

	test("handles full alphabet uppercase with shift", () => {
		expect(caesarCipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1)).toBe("BCDEFGHIJKLMNOPQRSTUVWXYZA");
	});

	test("returns same string when shift is 0", () => {
		expect(caesarCipher("No Change!", 0)).toBe("No Change!");
	});

	test("handles large shift value > 26 (wraps using modulo)", () => {
		expect(caesarCipher("abc", 29)).toBe("def"); // 29 % 26 = 3
	});

	test("handles negative shift (optional, if implemented)", () => {
		expect(caesarCipher("def", -3)).toBe("abc");
	});

	test("preserves mixed characters", () => {
		expect(caesarCipher("123 Hello!", 5)).toBe("123 Mjqqt!");
	});

	test("handles empty string", () => {
		expect(caesarCipher("", 5)).toBe("");
	});
});
