function decompose(n) {
    let currentTestedDigit = n - 1;
    let remainingPortion = Math.pow(n, 2);
    let digitsArray = [];

    while(remainingPortion > 0){
        let possibleSolution = buildDecomposed(remainingPortion, [], currentTestedDigit);

        if(!containsRepeats(possibleSolution) && possibleSolution[0] > 0)
            digitsArray.unshift(currentTestedDigit);

        remainingPortion -= Math.pow(currentTestedDigit, 2);

        currentTestedDigit = remainingPortion - Math.pow(currentTestedDigit - 1, 2) < 0 ? 
            nextLowestValidDigit(remainingPortion) : currentTestedDigit - 1;
    }

    return digitsArray;
}


function buildDecomposed(remainingPortion, testArray, currentTestedDigit){
    if(remainingPortion === 0)
        return testArray;
    
    currentTestedDigit = remainingPortion - Math.pow(currentTestedDigit, 2) < 0 ? 
        nextLowestValidDigit(remainingPortion) : currentTestedDigit;

    remainingPortion -= Math.pow(currentTestedDigit, 2);

    testArray.unshift(currentTestedDigit);

    return buildDecomposed(remainingPortion, testArray, currentTestedDigit - 1);
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

console.log(decompose(12));

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