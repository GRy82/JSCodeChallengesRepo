// An integer d is a divisor of an integer n if the remainder of n / d = 0.
    // Given an integer n, for each digit that makes up the integer determine whether it is a divisor.
    // Return the number of divisors occurring within the integer.

function findDigits(n){
    return n.toString().split('').reduce((total, current) => {
        return (n % parseInt(current) === 0) ? total + 1 : total;
    }, 0);
}

console.log(findDigits(1024));