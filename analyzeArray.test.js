import { analyzeArray } from "./analyzeArray.js";

test("[1,2,3,4,5]", () => {
	expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ min: 1, max: 5, average: 3, length: 5 });
});

test("[1,2,3,4,5]", () => {
	expect(analyzeArray([-1000, 2, 3, 4, 5, 5, 5, 123])).toEqual({ min: -1000, max: 123, average: -106.625, length: 8 });
});

describe("analyzeArray", () => {
	test("analyzes a typical array of numbers", () => {
		const result = analyzeArray([1, 8, 3, 4, 2, 6]);
		expect(result).toEqual({
			average: 4,
			min: 1,
			max: 8,
			length: 6,
		});
	});

	test("returns correct values for a single-element array", () => {
		const result = analyzeArray([42]);
		expect(result).toEqual({
			average: 42,
			min: 42,
			max: 42,
			length: 1,
		});
	});

	test("handles negative numbers", () => {
		const result = analyzeArray([-10, 0, 10]);
		expect(result).toEqual({
			average: 0,
			min: -10,
			max: 10,
			length: 3,
		});
	});

	test("returns correct results with all equal elements", () => {
		const result = analyzeArray([5, 5, 5, 5]);
		expect(result).toEqual({
			average: 5,
			min: 5,
			max: 5,
			length: 4,
		});
	});

	test("returns NaN for average when given empty array (optional behavior)", () => {
		const result = analyzeArray([]);
		expect(result).toEqual({
			average: NaN,
			min: undefined,
			max: undefined,
			length: 0,
		});
	});
});
