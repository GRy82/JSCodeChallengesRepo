// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares 
// has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate. (chocalate bar has linear squares)

function birthday(chocBar, day, month) {
    let validOutcomeQty = 0;
    for(let i = 0; i <= chocBar.length - month; i++){
        if (chocBar.slice(i, i + month).reduce((t, c) => t + c) === day)
            validOutcomeQty++;
    }
    return validOutcomeQty;
}

console.log(birthday([4], 4, 1));