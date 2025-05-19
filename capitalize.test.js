import { capitalize } from "./capitalize.js";

test("dog to Dog", () => {
	expect(capitalize("dog")).toBe("Dog");
});

test("cat to Cat", () => {
	expect(capitalize("cat")).toBe("Cat");
});

test("cat in the hat", () => {
	expect(capitalize("cat in the hat")).toBe("Cat In The Hat");
});
