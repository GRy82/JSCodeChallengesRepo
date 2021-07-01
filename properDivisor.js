function perfection(n){
    //start with n-1. No need to divide by itself, as n should not be included as a factor.
    let currentTested = n - 1;
    //with each number checked as a valid proper divisor, we also add the other multiple when found to be proper, thus this as a stopping point.
    let stoppingPoint = Math.pow(n, .5);
    // start empty if given n = 1, because collection should not include itself. otherwise start with 1 in the collection.
    let factors = n === 1 ? [] : [1];
    // if there is no remainder for each number checked, add it, and the quotient. If quotient === divisor, only add it once. 
    while (currentTested >= stoppingPoint){
        if(n % currentTested === 0){
            factors.push(currentTested);
            if(n / currentTested !== currentTested)
                factors.push(n / currentTested);
        }
        currentTested--;
    }
    //get sum and return 'YES' if sum === n. Otherwise return 'NO'
    let sum = factors.length === 0 ? 0 : factors.reduce((total, current) => total + current);
    return sum === n ? 'YES' : 'NO';
}

console.log(perfection(3));