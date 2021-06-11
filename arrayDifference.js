const arrayDiff = function (a, b) {
    return a.filter((element) => !b.includes(element));
}

module.exports = arrayDiff;

