function findShort(s){
    var min = Number.MAX_SAFE_INTEGER;
    var sArray = s.split(' ');
    sArray.forEach((element) => { 
        if (element.length < min) min = element.length;
    });
    return min;
}

console.log(findShort("Let's travel abroad shall we"));