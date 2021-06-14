const arrayDiff = require('../arrayDifference');
const { validSequence, nextLowest } = require('../decomposeSquare');


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
    describe('valid sequences', () => {
        let collection;
        it('should return false given a negative number in the collection.', () => {
            collection = [1, 2, -4, 3, 7];
            let validity = validSequence(collection);

            expect(validity).toBeFalsy();
        });
        it('should return false given a 0 in the collection.', () => {
            collection = [1, 2, 0, 3, 7];
            let validity = validSequence(collection);

            expect(validity).toBeFalsy();
        });
        it('should return false if it contains repeats.', () => {
            collection = [1, 2, 2, 3, 7];
            let validity = validSequence(collection);

            expect(validity).toBeFalsy();
        });
    });
    describe('valid digits', () => {
        it('should return largest digit whose square is less than remainder, part 1', () => {
            let remainder = 23;
            let largestValidDigit = nextLowest(remainder);
            
            expect(largestValidDigit).toBe(4);
        });
        it('should return largest digit whose square is less than remainder, part 2', () => {
            let remainder = 87;
            let largestValidDigit = nextLowest(remainder);
            
            expect(largestValidDigit).toBe(9);
        });
    });
});