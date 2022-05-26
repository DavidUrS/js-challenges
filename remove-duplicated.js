// PROBLEM:- write a function that will return an array without duplicate values in the array.
// Solution:- We can take the for loop approach to solve this but we are taking some librate in this. We are going to use the built-in method.

const removeDuplicated = (array) => {
    return array.reduce((acc, current)=>{
        if(acc.includes(current)) return acc;
        acc.push(current);
        return acc;
    },[])
}

console.log(removeDuplicated([1,1,2,3,4,4,4,5]));