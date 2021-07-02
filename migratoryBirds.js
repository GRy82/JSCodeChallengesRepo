// Given an array of bird sightings where every element represents a bird type id, 
// determine the id of the most frequently sighted type. If more than 1 type has 
// been spotted that maximum amount, return the smallest of their ids.

function migratoryBirds(arr) {
    let sightingsByType = {};
    for(let i = 0; i < arr.length; i++){
        if(sightingsByType[arr[i]]) sightingsByType[arr[i]]++;
        else sightingsByType[arr[i]] = 1;
    }
    let maxSightFreq = Math.max(...Object.values(sightingsByType));
    let mostSighted = Object.keys(sightingsByType).filter(b => sightingsByType[b] === maxSightFreq);
    return Math.min(...mostSighted);
}