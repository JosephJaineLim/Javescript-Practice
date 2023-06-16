/* 
Create two functions:

The first is isOdd() to check if a given number is odd using bitwise operator.
The second is isEven() to check if a given input is even using regular expressions.

Use of % operator is disallowed.

//-- FOR TESTING --//

isOdd(3) ➞ "Yes"
// Use Bitwise Operator

isOdd(58) ➞ "No"
// Use Bitwise Operator

isEven("0") ➞ "Yes"
// Use Regular Expression

isEven("-99") ➞ "No"
// Use Regular Expression

*/
const isOdd = (arr) => arr & 1 ? "Yes" : "No";
const isEven = (arr) => arr.match(/[02468]$/) ? "Yes" : "No";

console.log(isOdd(3));  // "Yes"
console.log(isOdd(58)); // "No"
console.log(isEven("0")); // "Yes"
console.log(isEven("-99")); // "No"
