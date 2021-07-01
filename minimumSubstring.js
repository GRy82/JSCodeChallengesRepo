function solve(s){
    let startPosition = s.indexOf('A');
    let smallestSubLength = Number.MAX_VALUE;

    while(startPosition !== -1){
        for(let i = startPosition, charCode = 65; i < s.length; i++){  //check the rest of the string for correct subsequent chars, starting with 'A', ending with 'Z' or when end of string is reached.
            let currentSubLength = i + 1 - startPosition;
            if (currentSubLength >= smallestSubLength) break; //don't waste time checking, if you've already exceeded smallest.
            if (charCode === 90 && s.charCodeAt(i) === charCode){
                smallestSubLength = currentSubLength; //if a smaller subsequence was found, this is the new smallest length.
                break;
            } 
            if (s.charCodeAt(i) === charCode) charCode++; //Current sought after character is found. Set next character to be sought after. 
        }
        let addedPosition = s.substring(startPosition + 1).indexOf('A');
        startPosition = addedPosition === -1 ? -1 : startPosition + addedPosition + 1;
    }
    if(smallestSubLength !== Number.MAX_VALUE) return smallestSubLength;
}
