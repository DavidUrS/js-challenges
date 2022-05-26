// Palindrome
// definition:- Palindrome is a word, sentence or character sequence which reads the same as we reverse it. Like- “mam”, “racecar” etc.

// PROBLEM:- Write a function that will check the string is a palindrome or not.

// Solution: It could be done with the help of “for loop” but there is another solution with less code. We will show the precise way to do this.

const isPalindrome = (word) => {
    if(typeof word !== 'string' || word.length == 0) {
        console.log('Invalid parameter', word);
        return;
    }
    const normalWord = word.split('');
    const reversedWord = word.split('').reverse();

    const isArrayEqual = normalWord.every((normal, index)=> reversedWord[index] === normal);
    return isArrayEqual;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('jaj'));
console.log(isPalindrome('david'));