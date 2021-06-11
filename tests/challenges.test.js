const arrayDiff = require('../arrayDifference');

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