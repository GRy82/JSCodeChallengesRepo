// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1 + 5 + 9. The right to left diagonal = 3 + 5 + 9. 
// Their absolute difference is |15 - 17| = 2.

function diagonalDifference(arr) {
    let twoDLength = arr.length;
    let [sumLR, sumRL] = [0, 0];
    
    for(let [i, j] = [0, twoDLength - 1]; i < twoDLength; i++, j--){
        sumLR += arr[i][i];
        sumRL += arr[i][j];
    }

    return Math.abs(sumLR - sumRL);
}


