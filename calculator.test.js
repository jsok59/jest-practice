import { calculator } from "./calculator";

test("add", () => {
	expect(calculator.add(5, 6)).toBe(11);
});

test("subtract", () => {
	expect(calculator.subtract(5, 6)).toBe(-1);
});

test("divide", () => {
	expect(calculator.divide(5, 6)).toBe(5 / 6);
});

test("multiply", () => {
	expect(calculator.multiply(5, 6)).toBe(30);
});
