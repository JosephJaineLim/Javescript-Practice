/*
A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

//-- FOR TESTING --//

isRepdigit(66) ➞ true

isRepdigit(0) ➞ true

isRepdigit(-11) ➞ false

NOTES:

The number 0 should return true (even though it's not a positive number).
*/

const isRepdigit = (a) => [...new Set([...String(a)])].length === 1

console.log(isRepdigit(66)) // true

console.log(isRepdigit(0)) // true

console.log(isRepdigit(-11)) // false
