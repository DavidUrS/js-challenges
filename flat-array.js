const array = [1,2,[3,4,[5,6,7,[8,9]]]];

const flat = (acc, current)=>{
    if(Array.isArray(current)) return current.reduce(flat, acc);
     
    if(!acc.includes(current)){
        acc.push(current);
    }
    return acc;
}

const flatArray = (array) => {
    return array.reduce(flat,[])
}

console.log(flatArray(array));