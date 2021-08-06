// Given a set of distinct integers, print the size of a maximal subset of S where the 
// sum of any 2 numbers in S' is not evenly divisible by k.

// Example
 
// S = [19,10,12,10,24,25,22], k = 4
//One of the arrays that can be created is S'[0] = [10, 12, 25]. 
// Another is S'[1] = [19, 22, 24]. 
// After testing all permutations, the maximum length solution array has 3 elements.

function nonDivisibleSubset(k, s) {
    let largestPossibleSet = 0;
    let numberOccurrences = {};
    for(let i = 0; i < s.length; i++){
        let remainder = s[i] % k;
        if(!numberOccurrences[remainder]) numberOccurrences[remainder] = 1;
        else numberOccurrences[remainder]++;
    }
    //if k is even and there is at least one occurrence of a remainder of k / 2, add one to the  group
    if(k % 2 === 0 && numberOccurrences[k / 2]) largestPossibleSet++;
    // Add one for at least one occurrence of remainder 0.
    if(numberOccurrences[0]) largestPossibleSet++;
    
    // iterate through the keys up to k / 2, non-inclusive. Of the pairs of remainders(key, k - key) that can add up to equal k, only add to largetsPossibleSet the value of that which is greater.
    let keys = Object.keys(numberOccurrences);
    let currentKey = 1;
    
    while(currentKey < k / 2){
        let [currentValue, otherValue] = [0, 0];
        if(numberOccurrences[currentKey]) 
            currentValue = numberOccurrences[currentKey];
        if(numberOccurrences[k - currentKey]) 
            otherValue = numberOccurrences[k - currentKey];
        if(currentValue !== 0 || otherValue !== 0)
            largestPossibleSet = currentValue >= otherValue ? 
                largestPossibleSet + currentValue : largestPossibleSet + otherValue;
        currentKey++;
    }

    return largestPossibleSet;
}

console.log(nonDivisibleSubset(5, [2, 7, 12, 17, 22]));
//console.log(nonDivisibleSubset(9, [422346306, 940894801, 696810740, 862741861, 85835055, 313720373]));