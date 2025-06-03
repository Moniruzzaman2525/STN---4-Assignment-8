
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
    { name: 'Alia', age: 30, gender: 'female' },
    { name: 'Shofiq', age: 25, gender: 'male' },
    { name: 'Monir', age: 35, gender: 'male' },
    { name: 'Safia', age: 28, gender: 'female' },
    { name: 'Emran', age: 22, gender: 'male' }
];

function filterAndMapNames(peopleArray) {
    return peopleArray
        .filter(person => person.gender !== 'female')
        .map(person => person.name);
}

const result = filterAndMapNames(people);
console.log(result);
