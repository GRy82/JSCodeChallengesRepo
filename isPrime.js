module.exports = (number) => {
    let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    let primeEndings = [1, 3, 7, 9];
    let numberString = number.toString();
    if(primes.includes(number)) return true;
    //if it ends in something other than 1, 3, 7, 9 and is not 2 or 5 then it's not prime.
    if(!primeEndings.includes(parseInt(numberString[numberString.length - 1]))) return false;
    //if the sum of digits is divisible by 3 then it is not a prime number
    if(number.toString().split('').reduce((total, current) => total + parseInt(current), 0) % 3 === 0) return false;
    
    let sqrt = Math.pow(number, .5);
    for(let i = 0; primes[i] < sqrt; i++)
        if(number % primes[i] === 0) return false;
    
    return true;
}