function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Number.isInteger(Math.sqrt(sq)) ? Math.pow(Math.pow(sq, .5) + 1, 2) : -1;
}

  console.log(findNextSquare(121));