// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const items = [
    { quantity: 2, price: 10 },
    { quantity: 3, price: 15 },
    { quantity: 1, price: 7 },
];

const calculateTotalValue = arr =>
    arr.reduce((total, item) => total + item.quantity * item.price, 0);

const totalValue = calculateTotalValue(items);
console.log('Total value:', totalValue);
