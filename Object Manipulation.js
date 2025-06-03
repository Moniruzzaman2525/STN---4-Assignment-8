//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
const books = [
    { title: 'JavaScript', author: 'Monir Khan', year: 1960 },
    { title: 'Typescript', author: 'Arif', year: 1949 },
    { title: 'React', author: 'Mehedy', year: 1925 },
    { title: 'Node js', author: 'Safiq', year: 1813 },
    { title: 'Redux', author: 'Kabir', year: 1951 }
];

const getBookTitles = (booksArray) => {
    return booksArray.map(book => book.title);
}

const titles = getBookTitles(books);
console.log(titles);

