// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    let sockCounts = {};
    for(let i = 0; i < ar.length; i++){
        if(sockCounts[ar[i]]) sockCounts[ar[i]]++;
        else sockCounts[ar[i]] = 1;
    }
    return Object.values(sockCounts).reduce((t, c) => t + Math.floor(c / 2), 0);
}