/*
Given a number, n, return a function which adds n to the number passed to it.

//-- FOR TESTING --//
add(10)(20) ➞ 30

add(0)(20) ➞ 20

add(-30)(80) ➞ 50

NOTES:
All numbers used in the tests will be integers (whole numbers).

Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).
*/

const add = (a) => (b) => a + b;

console.log(add(10)(20)) // 30
console.log(add(0)(20)) // 20
console.log(add(-30)(80)) // 50