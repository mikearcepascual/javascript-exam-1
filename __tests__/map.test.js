import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  // Please add test cases here
	test("halfNumbers should [6,5,9,10,4]", () => {
		const arrayNumbers = [12,10,18,20,8];
		const expected = [6,5,9,10,4];
		const result = halfNumbers(arrayNumbers);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("spliceNames should ['Hello John','Hello Brian','Hello Peter']", () => {
		const arrayWords = ['John','Brian','Peter'];
		const expected = ['Hello John','Hello Brian','Hello Peter'];
		const result = spliceNames(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("addSerialNumber should return ['1. apple','2. orange','3. banana']", () => {
		const arrayWords = ['apple','orange','banana'];
		const expected = ['1. apple','2. orange','3. banana'];
		const result = addSerialNumber(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
});
