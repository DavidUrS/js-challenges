// square a number and order it

const arrayOfNumbers = [3,7,2,5,7,85,4,22,43,72,39];
const arrayOfNumberSquared = arrayOfNumbers.map(number=> Math.pow(number,2));
console.log(arrayOfNumberSquared.sort((a,b)=> a-b));