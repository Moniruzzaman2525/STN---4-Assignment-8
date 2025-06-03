//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
    { name: 'Monir', age: 25 },
    { name: 'Arif', age: 30 },
    { name: 'Shofiq', age: 35 }
];


const updateAgeByName = (arr, name, newAge) => {
    const person = arr.find(p => p.name === name);
    if (person) {
        person.age = newAge;
    }
};
updateAgeByName(people, 'Monir', 32);

console.log(people);
