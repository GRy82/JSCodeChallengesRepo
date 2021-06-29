function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let minArray = arr.slice(), maxArray = arr.slice();
    minArray.splice(arr.indexOf(max), 1);
    maxArray.splice(arr.indexOf(min), 1);
    console.log(minArray.reduce((t, c) => t + c), maxArray.reduce((t, c) => t + c));
}

miniMaxSum([1, 2, 3, 4]);