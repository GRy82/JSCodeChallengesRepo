function decompose(n){
    let remainder = Math.pow(n, 2);
    let digitsArray = [];
    let testedDigit = n - 1;

    while(remainder > 0){
        if(digitCreatesValidSequence(remainder, testedDigit)){
            digitsArray.unshift(testedDigit);
            remainder -= Math.pow(testedDigit, 2);
        }
        
        testedDigit = nextLowestValidDigit(remainder);
    }
}


// take in a remainder and single digit. PLay a sequence out to the end 
// and see whether it results in an appropriate sequence.
// Appropriate sequence gets remainder to 0, contains no digits
// <= 0, and contains no repeats.
function digitCreatesValidSequence(remainder, digit){
    possibleSequence = generateSolution(remainder, [], digit);
    if(containsRepeats(possibleSequence) || possibleSequence[0] <= 0)
        return false;

    return true;
}

function generateSolution(remainder, testArray, digit){
    if(remainder === 0) return testArray;

    testArray.unshift(digit);
    remainder -= Math.pow(digit, 2);
    digit = nextLowestValidDigit(remainder);

}


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
        

function nextLowestValidDigit(remainingPortion){
    return Math.floor(Math.pow(remainingPortion, .5));
}




exports.validSequence = validSequence;


















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