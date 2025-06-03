// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
    { name: 'Monir', grades: [90, 85, 88] },
    { name: 'Billal', grades: [70, 80, 75] },
    { name: 'Arif', grades: [95, 92, 90] },
    { name: 'Safiq', grades: [60, 65, 70] }
];

const average = (arr) => {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length
}

const sortByAverageGradeDesc = (studentArr) => {
    return [...studentArr].sort((a, b) => average(b.grades) - average(a.grades));
};

const sortedStudents = sortByAverageGradeDesc(students);

console.log(sortedStudents);
