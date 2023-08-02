/*
Write a function that returns an anonymous function, which adds n to its input

//-- FOR TESTING --//
adds1 = addsNum(1)

adds1(3) ➞ 4
adds1(5.7) ➞ 6.7

adds10 = addsNum(10)

adds10(44) ➞ 54
adds10(20) ➞ 30
*/

const addsNum = (a) => (b) => a+b

adds1 = addsNum(1)

console.log(adds1(3)) // 4
console.log(adds1(5.7)) // 6.7

adds10 = addsNum(10)

console.log(adds10(44)) // 54
console.log(adds10(20)) // 30
