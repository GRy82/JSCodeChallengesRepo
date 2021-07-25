// Given a sequence of n integers, p(1), p(2),...,p(n) where each element is distinct and
    // satisfies 1 <= p(x) <= n. For each x where 1 <= x <= n, that is x increments from 1 to n,
    // find any integer y such that p(p(y)) = x and keep a history of the values of y in a return
    // array.
    // ex. for p = [5, 2, 1, 3, 4], y = [4, 2, 5, 1, 3].

let permutationEquation = p => {
    return p.map((item, index) => p.indexOf(p.indexOf(index + 1) + 1) + 1);
}

console.log(permutationEquation([5, 2, 1, 3, 4]));