// Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a new line with  
// 6 places after the decimal.

function plusMinus(arr) {
    let totals = { pos: 0, neg: 0, zero: 0 };
    for(let i = 0; i < arr.length; i++)
        if (arr[i] > 0) totals['pos']++;
        else if (arr[i] < 0) totals['neg']++;
        else totals['zero']++;

    for(let key in totals)
        console.log((totals[key] / arr.length).toFixed(6));
}


plusMinus([-1, -2, 0, 1]);