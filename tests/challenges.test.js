const arrayDiff = require('../arrayDifference');
const { nextLowest, isDeadEnd } = require('../decomposeSquare');
const dataReverse = require('../dataReverse');
const sumPairs = require('../sumOfPairs');


describe('arrayDiff', () => {
    let arrayOne, arrayTwo;

    beforeEach(() => {
        arrayOne = [1, 3, 4, 5, 6];
        arrayTwo = [1, 2, 6, 7, 8];
    });

    it('should return array of integers present only in first array', () => {
        const diffArray = arrayDiff(arrayOne, arrayTwo);

        expect(diffArray).toEqual(expect.arrayContaining([3, 4, 5]));
    });
    it('should return all first array integers if second array is empty', () => {
        arrayTwo = [];
        const diffArray = arrayDiff(arrayOne, arrayTwo);
        expect(diffArray).toEqual(arrayOne);
    });
    it('should return empty array if first array is empty', () => {
        arrayOne = [];
        const diffArray = arrayDiff(arrayOne, arrayTwo);
        expect(diffArray).toEqual([]);
    });
});


describe('decomposeSquare', () => {
    describe('valid digits', () => {
        it('should return one less than the current digit.', () => {
            let remainder = 100;
            let currentDigit = 9;
            let largestValidDigit = nextLowest(remainder, currentDigit);
            
            expect(largestValidDigit).toBe(8);
        });
        it('should return largest digit whose square is less than remainder, part 2', () => {
            let remainder = 87;
            let currentDigit = 43;
            let largestValidDigit = nextLowest(remainder, currentDigit);
            
            expect(largestValidDigit).toBe(9);
        });
        it('should return largest digit whose square is less than remainder, part 2', () => {
            let remainder = 0;
            let currentDigit = 3;
            let largestValidDigit = nextLowest(remainder, currentDigit);
            
            expect(largestValidDigit).toBe(0);
        });
    });

    // describe('isDeadEnd', () => {
    //     var invalidRemainders = new Set([2, 3, 6, 7, 8, 11, 12, 15, 18, 19, 22, 23]);
    //     it('should return false if test digit is part of a solution set with a corresponding remainder.', () => {
    //         let testedDigit = 4;
    //         let remainder = 9
    //         let deadEnd = isDeadEnd(remainder, testedDigit);

    //         expect(deadEnd).toBeFalsy();
    //     });
    //     it('should return true if remainder is present in invalidRemainders.', () => {
    //         let testedDigit = 7;
    //         let remainder = 23;
    //         let deadEnd = isDeadEnd(remainder, testedDigit);

    //         expect(deadEnd).toBeTruthy();
    //     });
    //     it('should return true if remainder and testedDigit lead to a dead end.', () => {
    //         let testedDigit = 10;
    //         let remainder = 44;
    //         let deadEnd = isDeadEnd(remainder, testedDigit);

    //         expect(deadEnd).toBeTruthy();
    //     });
    //     it('should return true if remainder and testedDigit lead to a dead end.', () => {
    //         let testedDigit = 3;
    //         let remainder = 0;
    //         let deadEnd = isDeadEnd(remainder, testedDigit);

    //         expect(deadEnd).toBeFalsy();
    //     });
    // });
});

describe('dataReverse', () => {
    it('should return the argument as is if length of data is 8', () => {
        let argument = [0, 1, 1, 0, 1, 1, 0, 0];

        expect(dataReverse(argument)).toBe(argument);
    });
    it('should group data by every 8 digits and return those groups in reverse', () => {
        let expected = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
        let data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];

        expect(dataReverse(data)).toEqual(expected);
    });
    it('should do same as above for smaller data set', () => {
        let expected = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0];
        let data = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1];

        expect(dataReverse(data)).toEqual(expected);
    });
    it('should throw exception given 10 digits', () => {
        let data = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1];
        expect(() => dataReverse(data)).toThrow();
    });
    it('should throw exception given less than 8 digits', () => {
        let data = [0,0,1,1,0,1];
        expect(() => dataReverse(data)).toThrow();
    });
    it('should throw exception given null', () => {
        let data = null;
        expect(() => dataReverse(data)).toThrow();
    });
    it('should throw exception given undefined', () => {
        let data = null;
        expect(() => dataReverse(data)).toThrow();
    });
    it('should throw exception non-array object', () => {
        let data = { id: 4 };
        expect(() => dataReverse(data)).toThrow();
    });
    it('should throw exception given a string of length 8', () => {
        let data = 'hello hi';
        expect(() => dataReverse(data)).toThrow();
    });
});

describe('sumPairs', () => {
    it('should return [1, 7] for sum = 8 and collection [1, 4, 8, 7, 3, 15]', () => {
        let expected = [1,7];
        let actual = sumPairs([1, 4, 8, 7, 3, 15], 8);
        expect(expected).toEqual(actual);
    });
    it('should return [0, -6] for sum = -6 and collection [1, -2, 3, 0, -6, 1]', () => {
        let expected = [0,-6];
        let actual = sumPairs([1, -2, 3, 0, -6, 1], -6);
        expect(expected).toEqual(actual);
    });
    it('should return undefined for sum = -7 and collection [20, -13, 40]', () => {
        let actual = sumPairs([20, -13, 40], -7);
        expect(actual).toBeUndefined();
    });
    it('should return [1,1] for sum = 2 and collection [1, 2, 3, 4, 1, 0]', () => {
        let expected = [1,1];
        let actual = sumPairs([1, 2, 3, 4, 1, 0], 2);
        expect(expected).toEqual(actual);
    });
    it('should return [3,7] for sum = 10 and collection [10, 5, 2, 3, 7, 5]', () => {
        let expected = [3,7];
        let actual = sumPairs([10, 5, 2, 3, 7, 5], 10);
        expect(expected).toEqual(actual);
    });
    it('should return [4,4] for sum = 8 and collection [4, -2, 3, 3, 4]', () => {
        let expected = [4,4];
        let actual = sumPairs([4, -2, 3, 3, 4], 8);
        expect(expected).toEqual(actual);
    });
    it('should return [0,0] for sum = 0 and collection [0, 2, 0]', () => {
        let expected = [0,0];
        let actual = sumPairs([0, 2, 0], 0);
        expect(expected).toEqual(actual);
    });
    it('should return [13,-3] for sum = 10 and collection [5, 9, 13, -3]', () => {
        let expected = [13,-3];
        let actual = sumPairs([5, 9, 13, -3], 10);
        expect(expected).toEqual(actual); 
    });
  });
