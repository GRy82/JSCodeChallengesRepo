// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

//Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

const isPrime = require('./isPrime');

convertFrac = (lst) => {
    let denoms = lst.map(pair => pair[1]);
    let primeFactors = denoms.map((denom) => {return getPrimeFactors(denom);});
    let lcm = primesMultiplied(primeFactors);
    //construct the resulting string
    return lst.reduce((accumulator, pair) => {
        return accumulator + '(' + (pair[0] * (lcm/pair[1])).toString()
        + ',' + lcm.toString() + ')'
    }, '');
}

function getPrimeFactors(number){
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    let primeFactors = [];
    let primeIndex = 0;
    while(!isPrime(number)){
        let noRemainder = number % primes[primeIndex] === 0;
        if(noRemainder){
            number = number / primes[primeIndex];
            primeFactors.push(primes[primeIndex]);
        }
        else
            primeIndex++;
    }
    primeFactors.push(number);

    return primeFactors;
}


function primesMultiplied(primeFactors){
    let maxPrimeFrequencies = {};

    //go through all sets of prime factors
    for(let i = 0; i < primeFactors.length; i++){
        let primeFrequencies = {};
        //go through single set of prime factors
        for(let j = 0; j < primeFactors[i].length; j++){
            let primeFreqkey = primeFactors[i][j].toString();
            if(Object.keys(primeFrequencies).includes(primeFreqkey))
                primeFrequencies[primeFreqkey]++;
            else
                primeFrequencies[primeFreqkey] = 1;
        }

        // for the given set of prime factors, if freq. of a prime factor exceeds 
        // the freq. stored in maxPrimeFrequencies, then replace that value.
        for(let key in primeFrequencies){
            maxKeys = Object.keys(maxPrimeFrequencies)
            if(!maxKeys.includes(key))
                maxPrimeFrequencies[key] = primeFrequencies[key];
            else if(primeFrequencies[key] > maxPrimeFrequencies[key])
                maxPrimeFrequencies[key] = primeFrequencies[key];
        }
    }

    return Object.keys(maxPrimeFrequencies).reduce((total, current) => {
        return total * Math.pow(parseInt(current), maxPrimeFrequencies[current])
    }, 1);
}