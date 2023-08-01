/*
Create a function that takes two arguments: the original price and the discount percentage as integers and returns the final price after the discount.


//-- FOR TESTING --//
dis(1500, 50) ➞ 750

dis(89, 20) ➞ 71.2

dis(100, 75) ➞ 25

NOTES:

Your answer should be rounded to two decimal places.
*/
const dis = (a,b) => a - (a * b / 100)
console.log(dis(1500, 50)) // 750
console.log(dis(89, 20)) // 71.2
console.log(dis(100, 75)) // 25