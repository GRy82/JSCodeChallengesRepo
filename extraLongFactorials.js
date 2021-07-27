// The factorial of integer n, written n!, is defined as n! = n * (n-1)
// * (n-2)... * 1.  
// Calculate and print the factorial of a given integer. For example, if
// we calculate 30!, we get 265252859812191058636308480000000.

// Complete the extraLongFactorials function in the editor below. It should 
// print the result and return. 
// extraLongFactorials has the following parameter(s):
// n: an integer

// hint: use BigInts.

function extraLongFactorials(n) {
    let bigInt = BigInt(n);
    let factorial = 1n;

    for (let i = bigInt; i > 1n ; i--)
        factorial *= i;
    
    console.log(factorial.toString());
}

extraLongFactorials(5);