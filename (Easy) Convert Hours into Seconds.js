/*
Write a function that converts hours into seconds.

//-- FOR TESTING --//
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400

NOTES: 
60 seconds in a minute, 60 minutes in an hour

Don't forget to return your answer.
*/

const howManySeconds = (arr) => arr * 60 * 60; 

console.log(howManySeconds(2)) // 7200
console.log(howManySeconds(10)) // 36000
console.log(howManySeconds(24)) // 86400