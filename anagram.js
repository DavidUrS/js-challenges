// Definition:- A word is an anagram of another word if they are using the same letters with the same quantity, but arranged differently.

// PROBLEM:- write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. 
// Also, consider only characters, not spaces or punctuation. For Example:

// anagram('fried','fired') // true;
// anagram('gainly', 'lyinga') //true;
// anagram('listen', 'bye')  // false;
// Solution:- In this challenge, you have to compare both words not only in length but the letters as well. 
// one way is to store them in object and then compare them.

const indexString = (acc, current) => {
    acc[current] = acc[current] = acc[current] + 1 || 1;
    return acc;
}

const anagram = (string1, string2) => {
    if(string1.length !== string2.length) return false;
    const string1Splitted = string1.split('');
    const string2Splitted = string2.split('');
    const string1Indexed = string1Splitted.reduce(indexString, {});
    const string2Indexed = string2Splitted.reduce(indexString, {});
    for (const key in string1Indexed) {
        if(string2Indexed[key] !== string1Indexed[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagram('fried', 'fired'));
console.log(anagram('gainly', 'gainly'));
console.log(anagram('listen', 'bye'));