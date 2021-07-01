// There will be two arrays of integers. Determine all integers that satisfy 
// the following two conditions:
// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many 
// such numbers exist.

// Complete the getTotalX function in the editor below. It should return the number of 
// integers that are betwen the sets.

function getTotalX(a, b) {
    let max = Math.min(...b);
    let min = Math.max(...a);
    let x = 0;
    for(let i = min; i <= max; i++){
        let allAFactorsOfI = a.filter(e => i % e === 0).length === a.length;
        let iFactorOfAllB = b.filter(e => e % i === 0).length === b.length;
        if(allAFactorsOfI && iFactorOfAllB) x++;
    }
    return x;
}