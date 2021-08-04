// You are given a number of sticks of varying lengths. You will iteratively cut 
// the sticks into smaller sticks, discarding the shortest pieces until there are 
// none left. At each iteration you will determine the length of the shortest stick 
// remaining, cut that length from each of the longer sticks and then discard all 
// the pieces of that shortest length. When all the remaining sticks are the same 
// length, they cannot be shortened so discard them.

// Given the lengths of n sticks, print the number of sticks that are left before 
// each iteration until there are none left.

function cutTheSticks(arr){
    let stickCountsOverTime = [];
    arr.sort((a, b) => a - b);
    while(arr.length > 0){
        stickCountsOverTime.push(arr.length);
        let min = arr[0];
        arr = arr.map(e => e - min).filter(e => e > 0);
    }
    console.log(arr);
    return stickCountsOverTime;
}

function cutTheSticks2(arr){
    let stickCountsOverTime = [];
    while(arr.length > 0){
        stickCountsOverTime.push(arr.length);
        let min = Math.min(...arr);
        arr = arr.map(e => e - min).filter(e => e > 0);
    }

    return stickCountsOverTime;
}

console.log(cutTheSticks2([5, 4, 4, 2, 2, 8]));