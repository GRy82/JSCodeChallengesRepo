// There is a string, s, of lowercase English letters that is repeated infinitely many times.
// Given an integer, n, find and print the number of letter a's in the first n letters of the 
// infinite string.

function repeatedString(s, n){
    let repetitions = Math.floor(n / s.length);
    let excessLetters = n % s.length;
    let AsFromFullReps = repetitions * getAsInString(s);
    return excessLetters === 0 ? AsFromFullReps :
        AsFromFullReps + getAsInString(s.slice(0, excessLetters));
}

function getAsInString(s){
    return s.split('').filter(e => e === 'a').length;
}


