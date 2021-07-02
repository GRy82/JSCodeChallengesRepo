// Given an array of integers and a positive integer k, determine the number of (i, j) 
// pairs where i < j and ar[i] + ar[j] is divisible by k.

// Example
// ar=[1, 2, 3, 4, 5, 6]
// 3 pairs meeting criteria: [1, 3], [2, 3], [4, 6]
//Thus 3 should be returned.

function divisibleSumPairs(n, k, ar) {  
    let pairCount = 0;
    for(let i = 0; i < n - 1; i++)
        for(let j = i + 1; j < n; j++)
            if(i < j && (ar[i] + ar[j]) % k === 0)
                pairCount++;
    return pairCount;
}

console.log(divisibleSumPairs(2, 2, [8, 10]));