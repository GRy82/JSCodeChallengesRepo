function duplicateEncode(word){
    var output = "";
    var wordArray = word.toLowerCase().split('');
    wordArray.forEach(element => {
        let tempArray = wordArray.slice();
        tempArray.splice(wordArray.indexOf(element), 1);
        if(tempArray.includes(element)) output += ')';
        else output += '(';
    }); 
    return output;
}

console.log(duplicateEncode("Occurrences"));