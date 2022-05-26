const items = [
    { name: 'Edward', age: 21 },
    { name: 'Sharpe', age: 37 },
    { name: 'And', age: 45 },
    { name: 'The', age: -12 },
    { name: 'Magnetic', age: 13 },
    { name: 'Zeros', age: 37 }
];

const sortArrayByAge = (elem1, elem2) => {
    return elem1.age - elem2.age;
}

const sortArrayByName = (elem1, elem2) => {
    if(elem1.name < elem2.name) return -1;
    if(elem1.name > elem2.name) return 1;
    return 0
}

console.log(items.sort(sortArrayByAge));
console.log(items.sort(sortArrayByName));
  