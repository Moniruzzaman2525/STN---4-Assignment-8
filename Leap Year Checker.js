// Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const year = 2024;
console.log(`${year} is a leap year:`, isLeapYear(year));
