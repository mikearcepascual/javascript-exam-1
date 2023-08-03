import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here
	test("filterEvenNumbers should return [2,4]", () => {
		const arrayNumbers = [1,2,3,4,5];
		const expected = [2,4];
		const result = filterEvenNumbers(arrayNumbers);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("filterLengthWith4 should return ['four','five']", () => {
		const arrayWords = ['four','five','seven','six'];
		const expected = ['four','five'];
		const result = filterLengthWith4(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
	
	test("filterLengthWith4 should return ['apple','ants']", () => {
		const arrayWords = ['apple','ants','orange','banana'];
		const expected = ['apple','ants'];
		const result = filterStartWithA(arrayWords);
		
		expect(result).toStrictEqual(expected);
	});
});