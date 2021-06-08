// Bob is preparing to pass IQ test. The most frequent task in this test is to 
// find out which one of the given numbers differs from the others. Bob observed 
// that one number usually differs from the others in evenness. Help Bob — to 
// check his answers, he needs a program that among the given numbers finds one 
// that is different in evenness, and return a position of this number.

// Keep in mind that your task is to help Bob solve a real IQ test, which means
// indexes of the elements start from 1 (not 0)

function iqTest(numbers){
    
    var remainders = numbers.split(' ').map((el) => {
        return (Number)(el % 2);
    });
    return remainders.indexOf(1) === remainders.lastIndexOf(1) ? 
        remainders.indexOf(1) + 1 : remainders.indexOf(0) + 1;
}

console.log(iqTest("1 3 5 8 9"));