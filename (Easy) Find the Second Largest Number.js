/*
Create a function that takes an array of numbers and returns the second largest number.

//-- FOR TESTING --//
secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23

NOTES:
There will be at least two numbers in the array.
*/

const secondLargest = (a) => a.sort((a,b)=> b - a)[1]

console.log(secondLargest([10, 40, 30, 20, 50])) // 40
console.log(secondLargest([25, 143, 89, 13, 105])) // 105
console.log(secondLargest([54, 23, 11, 17, 10])) // 23