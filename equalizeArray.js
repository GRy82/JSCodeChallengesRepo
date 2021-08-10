// Given an array of integers, determine the minimum number of elements to delete
// to leave only elements of equal value.

function equalizeArray(arr) {
    let intOccurrences = {};

    for(let i = 0; i < arr.length; i++){
        if(!intOccurrences[arr[i]])
            intOccurrences[arr[i]] = 1;
        else   
            intOccurrences[arr[i]]++;
    }

    return arr.length - Math.max(...Object.values(intOccurrences)); 
}

console.log(equalizeArray([3, 3, 5, 3, 2]));