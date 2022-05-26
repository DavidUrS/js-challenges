const people = [
    {name: 'David', age: 25},
    {name: 'Miguel', age: 19},
    {name: 'Andres', age: 40},
    {name: 'Juan', age: 32},
];

// get count of all ages
const totalAge = people.reduce((age, person)=> age + person.age ,0);
console.log("--------------SUM AGE--------------");
console.log(totalAge);

// Get count of all peoples
const countOfPeople = people.reduce((total)=> total + 1 ,0);
console.log("--------------COUNT OF PEOPLE--------------");
console.log(countOfPeople);

// Array of names
const arrayOfNames = people.reduce((arrayOfNames, people)=> [...arrayOfNames, people.name],[]);
console.log("--------------ARRAY OF NAMES--------------");
console.log(arrayOfNames);

// Index
const indexed = people.reduce((dictionary, person)=> ({
    ...dictionary, [person.name]: person
 }),{});
console.log("--------------INDEXED-------------")
console.log(indexed);

// Get all person over 30
const oldPersons = people.reduce((acc, person)=> {
    if (person.age > 30) {
        acc.push(person);
    }
    return acc;
} , []);
console.log("--------------PEOPLE OVER 30-------------")
console.log(oldPersons);