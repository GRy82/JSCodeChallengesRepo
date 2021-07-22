// John Watson knows of an operation called a right circular rotation 
// on an array of integers. One rotation operation moves the last array 
// element to the first position and shifts all remaining elements right 
// one. To test Sherlock's abilities, Watson provides Sherlock with an 
// array of integers. Sherlock is to perform the rotation operation a 
// number of times then determine the value of the element at a given 
// position.
// For each array, perform a number of right circular rotations and 
// return the values of the elements at the given indices.


function circularArrayRotation(arr, rotations, queries) {
    while(rotations > 0){
        arr.unshift(arr.pop());
        rotations--;
    }
    
    return queries.map(c => arr[c]);
}