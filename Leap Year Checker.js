// Write a function that determines whether a given year is a leap year.
const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const checkYear = year => {
    if (isLeapYear(year)) {
        console.log(`Happy New Year! ${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
};

checkYear(2024);
checkYear(2023);
