/*
Create a function that takes an array containing only numbers and return the first element.

//-- FOR TESTING --//

getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
*/

const getFirstValue = (a) => a[0];

console.log(getFirstValue([1, 2, 3])) // 1
console.log(getFirstValue([80, 5, 100])) // 80
console.log(getFirstValue([-500, 0, 50])) // -500