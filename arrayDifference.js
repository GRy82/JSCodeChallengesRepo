function arrayDiff(a, b) {
    return a.filter((element) => !b.includes(element));
}

console.log(arrayDiff([1, 2, 3, 4, 5], [2, 3, 5]));