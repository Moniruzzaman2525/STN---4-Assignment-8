// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 3, 7];

const getUniqueNumbers = arr => [...new Set(arr)];

const uniqueNumbers = getUniqueNumbers(numbers);
console.log('Unique numbers:', uniqueNumbers);
