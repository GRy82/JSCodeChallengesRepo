// Your task is to write a function which returns the
// sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

function seriesSum(n)
{
    let counter = 0;
    let sum = 0; 
    while(counter < n){
        sum += (1 / (counter * 3 + 1));
        counter++;
    }
    return sum.toFixed(2).toString();
}

console.log(seriesSum(3));