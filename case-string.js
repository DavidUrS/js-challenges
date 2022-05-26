// Title Case a String
// PROBLEM:- Write a function which takes a string of two or more word and capitalize the first letter of each word.
const regexComma = new RegExp(/,/g)
const regexDot = new RegExp(/\./g)
const capitalizeFirstChartOfWord = (word) => {
    const newWord = [];
    let wordSanitized = word.replace(regexComma, '');
    wordSanitized = wordSanitized.replace(regexDot, '');
    const allWord = wordSanitized.split(' ');
    for (const word of allWord) {
        const splitedWord = word.split('');
        const firstChart = splitedWord.splice(0,1);
        splitedWord.splice(0,0,firstChart[0].toUpperCase());
        newWord.push(splitedWord);
    }
    return newWord.join(' ').replace(/,/g,'');
}

console.log(capitalizeFirstChartOfWord('hello, como, andas. jaja. si la. ka'));