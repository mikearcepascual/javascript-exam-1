import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
  // Please add test cases here
	test("firstGrownUp should return 18", () => {
		const arrayNumbers = [12,9,18,19,10];
		const expected = 18;
		const result = firstGrownUp(arrayNumbers);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("firstOrange should return orange", () => {
		const arrayWords = ['apple','ants','orange','banana'];
		const expected = 'orange';
		const result = firstOrange(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("firstLengthOver5Name should return William]", () => {
		const arrayWords = ['John','William','Smith','Brad'];
		const expected = 'William';
		const result = firstLengthOver5Name(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
});
