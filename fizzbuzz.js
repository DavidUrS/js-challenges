// FizzBuzz
// It is the most popular challenge in a coding interview. So, before going for an interview you should check this out.

// PROBLEM:- Write a function that does the following:

// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5

const logString = (number) => {
    if(number % 3 === 0 && number % 5 === 0){
        console.log('fizzbuzz');
        return;
    }
    if(number % 3 === 0) console.log('fizz');
    if(number % 5 === 0) console.log('buzz');
}

logString(15);