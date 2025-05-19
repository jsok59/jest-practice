import { reverseString } from "./reverseString";

test("reverse dog", () => {
	expect(reverseString("dog")).toBe("god");
});

test("reverse cat", () => {
	expect(reverseString("cat")).toBe("tac");
});

test("reverse cat in the box", () => {
	expect(reverseString("cat in the box")).toBe("xob eht ni tac");
});

test("reverse empty", () => {
	expect(reverseString("c")).toBe("c");
});
