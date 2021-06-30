// 2 kangaroos each have starting positions, x1 and x2, and each have a 
// consistent jump length v1 and v2, respectively.  Jumps occur simultaneously.
// This function returns whether these kangaroos will even be at the same position
// along x. Returns 'YES' or 'NO'.

function kangaroo(x1, v1, x2, v2) {
    while((x1 <= x2 && v1 > v2) || (x2 <= x1 && v2 > v1) ){
        if(x1 === x2) return 'YES';
        x1 += v1;
        x2 += v2;
    }
    return 'NO';
}