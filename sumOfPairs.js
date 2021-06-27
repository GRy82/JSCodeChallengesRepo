// Given a list of integers and a single sum value, return the first two values 
// (parse from the left please) in order of appearance that add up to form the sum.




// for each number seen, I will store the index it has been seen at. 
// This will be the basis for a memoization strategy to prevent high time-complexity.

function sumPairs(ints, s) {
    let indecesOfNumbers = {};
    for(let i = 0; i < ints.length; i++){
        let numberKey = ints[i].toString();
        if(Object.keys(indecesOfNumbers).includes(numberKey))
            indecesOfNumbers[numberKey].push(i);
        else
            indecesOfNumbers[numberKey] = [i];

        let number = parseInt(numberKey)
        let compliment = (s - number).toString();
        if(indecesOfNumbers[compliment]){
            let earliestCompIndex = Math.min(...indecesOfNumbers[compliment]);
            if(i !== earliestCompIndex)
                return [ints[earliestCompIndex], number];
        }
    }
    return undefined;
}

module.exports = sumPairs;