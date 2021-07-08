// We define a magic square to be an n x n matrix of distinct positive 
// integers from 1 to n^2 where the sum of any row, column, or diagonal of 
// length  is always equal to the same number: the magic constant.

// You will be given a 3 x 3 matrix  of integers in the inclusive range[1, 9]
// We can convert any digit a to any other digit b in the range [1,9] at 
// cost of |a-b|. Given s, convert it into a magic square at minimal cost.
// Print this cost on a new line.

function formingMagicSquare(s) {
    let cost = Number.MAX_VALUE;
    let sums = getRowColumnSums(s);
    let modalSums = getModalSum(sums);

}
//-------------------------------------------------
// returns the unused numbers as a collection.
function unusedNumbers(s){
    return [1,2,3,4,5,6,7,8,9].filter(n => {
        return !s[0].includes(n) 
        && !s[1].includes(n) 
        && !s[2].includes(n)
    });
}
//-------------------------------------------------
function getRowColumnSums(s){
    let sums = [];
    //rows and columns
    for(let i = 0; i < s.length; i++){
        sums.push(s[i][0] + s[i][1] + s[i][2]);
        sums.push(s[0][i] + s[1][i] + s[2][i]);
    }
    //diagonals
    sums.push(s[0][0] + s[1][1] + s[2][2]);
    sums.push(s[0][2] + s[1][1] + s[2][0]);

    return sums;
}
//-------------------------------------------------
function getModalSum(sums){
    let incidenceOfSums = {};
    for(let i = 0; i < sums.length; i++){
        if(incidenceOfSums[sums[i]]) incidenceOfSums[sums[i]]++;
        else incidenceOfSums[sums[i]] = 1;
    }

    let maxSum = Math.max(...Object.values(incidenceOfSums));

    return Object.keys(incidenceOfSums).filter(k => incidenceOfSums[k] === maxSum);
}
//-------------------------------------------------

let unused = unusedNumbers([[5, 3, 4], [1, 5, 8], [6, 4, 2]]);
console.log(unused);
