// sort number elements on array

const sortNumbers = (number1, number2) => {
    if(number1 < number2) return -1;
    if(number2 > number2) return 1;
    return 0;
}

const sortNumbers2 = (number1, number2) => {
    return number1 - number2
}

console.log([1,10,2,3,8,4].sort(sortNumbers2));