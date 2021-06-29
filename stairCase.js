// Its base and height are both equal to n. It is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

function staircase(n) {
    for(let i = n, j = 1; i > 0; i--, j++)
        console.log(new Array(i).join(' ') + new Array(j + 1).join('#'));
}