const testCase1 = [1, 2, 3, 5, 6, 8, 9];
const testCase2 = [-2, -1];
const testCase3 = [-10, -5, 0, 5, 10];

const squareArray = (array) => {
    const squaredArray = array.map(num => Math.pow(num, 2));
    return squaredArray.sort((a,b ) => a-b);
}

console.log(squareArray(testCase1))
console.log(squareArray(testCase2))
console.log(squareArray(testCase3))