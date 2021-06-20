// Square into Squares. Protect trees!

// Given a positive integral number n, return a strictly increasing sequence 
// (list/array/string depending on the language) of numbers, so that the sum 
// of the squares is equal to n².

// If there are multiple solutions (and there will be), return as far as 
// possible the result with the largest possible values:

var invalidRemainders = new Set([2, 3, 6, 7, 8, 11, 12, 15, 18, 19, 22, 23]);

function decompose(n){
    if(!n) return null;
    // start with remainder of n^2. start with n - 1 as first digit to check as part of solution
    let solution = buildArray(Math.pow(n, 2), [], n - 1); 
    //if solution contains any 0's or negative integers, it is not a valid input, and thus return null.
    if(solution.some(c => c <= 0)) return null;
    else return solution;
}

function buildArray(remainder, testArray, testedDigit){
    if(remainder === 0) return testArray; //you have found a valid solution or invalid solution given invalid input.

    possibleRemainder = remainder - Math.pow(testedDigit, 2); //this is what the remainder will be sent as to the next func call...

    if (isDeadEnd(possibleRemainder, testedDigit))//... if it is not a dead end leading to invalid solution.
        return buildArray(remainder, testArray.slice(), nextLowestValidDigit(remainder, testedDigit)); //if deadend, try with next valid number, and original remainder.

    testArray.unshift(testedDigit); //testedDigit was not a deadend. Add to collection and proceed recursively.
    return  buildArray(possibleRemainder, testArray.slice(), nextLowestValidDigit(possibleRemainder, testedDigit));

}
                  
function isDeadEnd(remainder, testedDigit){
    if(remainder === 0) return false; //If you are at the end of the solution.
    if(invalidRemainders.has(remainder)) //If remainder is impossible to resolve.
        return true;
    
    let nextDigit = nextLowestValidDigit(remainder, testedDigit);
    for(let i = nextDigit; i > 0; i--){ //starting at valid digit whose square is less than the remainder, and moving down.
        let tempRemainder = remainder;
        if(invalidRemainders.has(remainder - i * i)) continue; //this is a deadEnd, move to next possibility.  
        for(let j = i; j > 0; j--){ //See if remainder can even possibly get down to 0...
            tempRemainder -= j * j;
        }
        if(tempRemainder > 0) //... if it can't continue to next iteration
            continue;
        else 
            return false; // if you get to here, it't not a dead end.
    }

    invalidRemainders.add(remainder); //if you ge through entire loop, add to the invalidRemainders set, and return true.
    return true;
}

// returns currentDigit decremented by one.. Or if that number squared is larger than the remainder, 
// skip to a lower number -- the highest number that, when squared, is less than the remainder.
function nextLowestValidDigit(remainingPortion, currentTestedDigit){ 
    if(remainingPortion - Math.pow(currentTestedDigit - 1, 2) >= 0)
        return currentTestedDigit - 1;
    
    return Math.floor(Math.pow(remainingPortion, .5));
}

console.log(decompose(342));

exports.nextLowest = nextLowestValidDigit;
exports.buildArray = buildArray;
exports.isDeadEnd = isDeadEnd;


















// function decompose(n) {
//     let currentTestedDigit = n - 1;
//     let remainingPortion = Math.pow(n, 2);
//     let digitsArray = [];

//     while(remainingPortion > 0){
//         let possibleSolution = buildDecomposed(remainingPortion, [], currentTestedDigit);

//         if(!containsRepeats(possibleSolution) && possibleSolution[0] > 0)
//             digitsArray.unshift(currentTestedDigit);

//         remainingPortion -= Math.pow(currentTestedDigit, 2);

//         currentTestedDigit = remainingPortion - Math.pow(currentTestedDigit - 1, 2) < 0 ? 
//             nextLowestValidDigit(remainingPortion) : currentTestedDigit - 1;
//     }

//     return digitsArray;
// }


// function buildDecomposed(remainingPortion, testArray, currentTestedDigit){
//     if(remainingPortion === 0)
//         return testArray;
    
//     currentTestedDigit = remainingPortion - Math.pow(currentTestedDigit, 2) < 0 ? 
//         nextLowestValidDigit(remainingPortion) : currentTestedDigit;

//     remainingPortion -= Math.pow(currentTestedDigit, 2);

//     testArray.unshift(currentTestedDigit);

//     return buildDecomposed(remainingPortion, testArray, currentTestedDigit - 1);
// }



// function decompose(n) {
//     let finalArray = [];
//     finalArray = buildDecomposed(Math.pow(n, 2), [], n - 1);
//     return finalArray;
// }

// function buildDecomposed(remainingPortion, digitsArray, currentTested){
//     if(remainingPortion === 0) 
//         return digitsArray;

//     let possibleRemainder = remainingPortion - Math.pow(currentTested, 2);

//     if (possibleRemainder < 0) {
//         currentTested = nextLowestValidDigit(remainingPortion);
//         return buildDecomposed(remainingPortion, digitsArray, currentTested);
//     }
    
//     digitsArray.unshift(currentTested);    

//     if(possibleRemainder === 0)
//         return digitsArray;

//     let possibleNewDigitsArray = buildDecomposed(possibleRemainder, digitsArray, --currentTested);

//     if(possibleNewDigitsArray[0] < 1){
//         digitsArray.shift();
//         return buildDecomposed(possibleRemainder, digitsArray, currentTested - 1);
//     }

//     return possibleNewDigitsArray;
// }