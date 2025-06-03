
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const square = (num) => {
    return num * num
}

const double = (num) => {
    return num * 2
}

const add5 = (num) => {
    return num + 5
}

const composedFunction = (num) => {
    return add5(double(square(num)))
}

const input = 3;
const result = composedFunction(input);
console.log(`Input: ${input} -> Output: ${result}`);
