/*
Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

//-- FOR TESTING --//
const plusFive = makePlusFunction(5)

plusFive(2) ➞ 7

plusFive(-8) ➞ -3


const plusTen = makePlusFunction(10)

plusTen(0) ➞ 10

plusTen(188) ➞ 198

plusFive(plusTen(0)) ➞ 15


NOTES:
All inputs will be valid numbers.
*/

const makePlusFunction = (a) => (b) =>  a + b

const plusFive = makePlusFunction(5);
console.log(plusFive(2)) // 7
console.log(plusFive(-8)) // -3

const plusTen = makePlusFunction(10)
console.log(plusTen(0)) // 10
console.log(plusTen(188)) // 198
console.log(plusFive(plusTen(0))) // 15

