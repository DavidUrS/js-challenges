// Fibonacci
// Definition:- Fibonacci sequence is basically a sequence of number where every number in the sequence is the sum of the two previous one. 
// A Fibonacci sequence is something look like this — 0,1,1,2,3,5,8,13,21,….

// PROBLEM:- write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument to the function.

// Solution:- First we have to generate the sequence and then we have to find out the nth value of the sequence.

const returnFibonacciSequence = (number) => {
    const fibinacciResult = [0, 1];
    if(number === 0) return [0];
    if(number === 1) return fibinacciResult;
    for (let index = 2; index <= number; index++) {
        const newPosition = fibinacciResult[index-2] + fibinacciResult[index-1];
        fibinacciResult.push(newPosition);
    }
    return fibinacciResult;
}

console.log(returnFibonacciSequence(6))