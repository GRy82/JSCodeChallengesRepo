function decompose(n) {
    return buildDecomposed(Math.pow(n, 2), new Array(), n - 1);
}

function buildDecomposed(remainingPortion, digitsArray, currentTested){
    if(remainingPortion === 0) 
        return digitsArray;

    let possibleRemainder = remainingPortion - Math.pow(currentTested, 2);

    if (possibleRemainder < 0) 
        return buildDecomposed(remainingPortion, digitsArray, currentTested - 1);
    
    digitsArray.unshift(currentTested);    

    if(possibleRemainder === 0)
        return digitsArray;

    let possibleNewDigitsArray = buildDecomposed(possibleRemainder, digitsArray, --currentTested);

    if(possibleNewDigitsArray[0] < 1){
        digitsArray.shift();
        return buildDecomposed(possibleRemainder, digitsArray, currentTested - 1);
    }

    return possibleNewDigitsArray;
}

console.log(decompose(11));