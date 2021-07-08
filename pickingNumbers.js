// Given an array of integers, find the longest subarray where the absolute difference 
// between any two elements is less than or equal to 1.

function pickingNumbers(a) {
    let frequencies = {};
    let longestLengthSub = 0;

    for(let i = 0; i < a.length; i++){
        if (!frequencies[a[i]]) frequencies[a[i]] = 1;
        else frequencies[a[i]]++
    }

    for(let key of Object.keys(a).sort()){
        let oneMore = frequencies[parseInt(key) + 1] ? frequencies[parseInt(key) + 1] : 0;
        let totalFrequency = frequencies[key] + oneMore;
        if(totalFrequency > longestLengthSub)
            longestLengthSub = totalFrequency;
    }
        
    return longestLengthSub;  
}
