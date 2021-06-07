// Find index where sum of elements to the left of index is = to sum of elements to the right.
// Takes arrays of length 0 < len < 1000.
// if it can't be done, return -1. 
// If multiple indeces satisfy the condition, return the lower one. 

function findEvenIndex(arr)
{
    // Check validity
    if(arr.length === 0 || arr.length > 1000) 
        throw new Error("array must be integers of length 1 - 1000");
    // dict keys will be the index, and value will be integer array of length 2. 
    // 1st dimension represents the index.
    // 2nd dimension 1st value is sum to left. 2nd dimension 2nd value is sum to right.
    var dict = new Object();
    // Left remains 0. RIght will accumulate for dict[0].
    dict[0] = [0, 0];
    for(let j = 1; j < arr.length; j++)
        dict[0][1] += arr[j];
    if(0 === dict[0][1]) return 0;
    // For dict[1] through dict[arr.length - 2]. Use values already established in dict to 
    // expedite calculation. Improves performance for large arrays.
    for(let i = 1; i < arr.length - 1; i++){
        dict[i] = [0, 0];
        dict[i][0] = dict[i - 1][0] + arr[i - 1];
        dict[i][1] = dict[i - 1][1] - arr[i];
        
        if(dict[i][0] === dict[i][1])
            return i;
    }

    console.log(dict[arr.length - 2][0] + arr[arr.length - 2]);
    return dict[arr.length - 2][0] + arr[arr.length - 2] === 0
      ? (arr.length - 1) : -1;
}

console.log(findEvenIndex([10,-80,10,10,15,35,20]));