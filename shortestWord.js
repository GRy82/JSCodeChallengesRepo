// function findShort(s){
//     var min = Number.MAX_SAFE_INTEGER;
//     var sArray = s.split(' ');
//     sArray.forEach((element) => { 
//         if (element.length < min) min = element.length;
//     });
//     return min;
// }


// ... is the spread operator. Allows arrays, strings or objects to be expanded.
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

console.log(findShort("Let's travel abroad shall we"));
