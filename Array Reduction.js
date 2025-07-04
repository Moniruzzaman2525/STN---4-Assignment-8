//Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (arr) => {
    return arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0)
}

const result = sumEvenNumbers(numbers);
console.log('Sum of even numbers:', result);
