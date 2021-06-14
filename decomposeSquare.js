var invalidRemainders = new Set([2, 3, 6, 7, 8, 11, 12, 15, 18, 19, 22, 23]);

function decompose(n){
    let remainder = Math.pow(n, 2);
    let digitsArray = []
    let testedDigit = n - 1;

    return buildArray(remainder, [], testedDigit);
}
//dynamically add invalidRemainders at some point if we figure out how to.
                    //  144          []          10
function buildArray(remainder, testArray, testedDigit){
    if(remainder === 0) return testArray;

    possibleRemainder = remainder - Math.pow(testedDigit, 2); // 44

    //if the remainder that would be yielded is the precursor to an invalid solution you run the function with the next possible digit.
    if (isDeadEnd(possibleRemainder, testedDigit))
        return buildArray(remainder, testArray, nextLowestValidDigit(remainder, testedDigit));

    testArray.unshift(testedDigit);
    return  buildArray(possibleRemainder, testArray, nextLowestValidDigit(possibleRemainder, testedDigit));

}
                    //44       //10
function isDeadEnd(remainder, testedDigit){
    if(invalidRemainders.has(remainder))
        return true;
      
    
    let nextDigit = nextLowestValidDigit(remainder, testedDigit);
    for(let i = nextDigit; i > 0; i--){
        let tempRemainder = remainder;
        if(invalidRemainders.has(remainder - i * i)) continue;
        for(let j = i; j > 0; j--){
            tempRemainder -= j * j;
        }
        if(tempRemainder > 0) 
            continue;
        else 
            return false;
    }

    invalidRemainders.add(remainder);
    return true;
}

console.log(isDeadEnd(9, 4));



function validSequence(arr){   
    if(hasInvalidDigit(arr) || containsRepeats(arr))
        return false;

    return true;
}

function hasInvalidDigit(arr){
    if(arr.some(c => c <= 0))
        return true;

    return false;
}


function containsRepeats(arr){
    let newArray = [];
    for(var value in arr){
        if(newArray.includes(arr[value])) return true;
        newArray.push(arr[value]);
    }
    return false;
}
        

function nextLowestValidDigit(remainingPortion, currentTestedDigit){
    if(remainingPortion - Math.pow(currentTestedDigit - 1, 2) >= 0)
        return currentTestedDigit - 1;
    
    return Math.floor(Math.pow(remainingPortion, .5));
}




exports.validSequence = validSequence;
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