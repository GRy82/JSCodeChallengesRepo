function oddOrEven(array) {
    if(array.length === 0) return 'even';
    var total = array.reduce((total, el) => { 
        return total + el 
    });
    return total % 2 === 0 ? 'even' : 'odd';
 }

 console.log(oddOrEven([]));