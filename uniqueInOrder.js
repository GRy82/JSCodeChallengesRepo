var uniqueInOrder=function(iterable){
    let last = '';
    let resultArray = [];
    for(let i = 0; i < iterable.length; i++){
        if (iterable[i] != last)
            resultArray.push(iterable[i]);
        last = iterable[i];
    }

    return resultArray;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));