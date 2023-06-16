/* 
A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

Create a function that determines whether a number is a Disarium or not.

//-- FOR TESTING --//
isDisarium(75) ➞ false
// 7^1 + 5^2 = 7 + 25 = 32

isDisarium(135) ➞ true
// 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

isDisarium(544) ➞ false

isDisarium(518) ➞ true

isDisarium(8) ➞ true

isDisarium(466) ➞ false

*/


const isDisarium = (arr) => 
arr
    .toString()
    .split("")
    .map((el,index) => el = Math.pow(Number(el),index+1))
    .reduce((acc,curr) => acc + curr) === arr;

console.log(isDisarium(75)); // false
console.log(isDisarium(135)); // true
console.log(isDisarium(544)); // false
console.log(isDisarium(518)); // true
console.log(isDisarium(8)); // true
console.log(isDisarium(466)); // false