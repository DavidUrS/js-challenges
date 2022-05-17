const testCase1 = [5, 7, 1, 1, 2, 3, 22];
const testCase2 = [1, 1, 1, 1, 1];

const getMinimunSum = (arrayOfCoins) => {
    const sortedCoins = arrayOfCoins.sort((a, b)=> a - b);
    let minimumSumOfMoney = 0;

    for (const coin of sortedCoins) {
        if(coin > minimumSumOfMoney + 1) return minimumSumOfMoney + 1;
        minimumSumOfMoney = minimumSumOfMoney + coin;
    }
    
    return minimumSumOfMoney + 1;
}

console.log(getMinimunSum(testCase1));
console.log(getMinimunSum(testCase2));