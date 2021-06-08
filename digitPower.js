// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51



function digPow(n, p){
    let digitsArray = n.toString().split('');
    let sumOfPows = digitsArray.reduce((sum, el) => {
        return sum + Math.pow(parseInt(el), p++);
    }, 0);
    return sumOfPows % n === 0 ? sumOfPows / n : -1;
}

console.log(digPow(695, 2));