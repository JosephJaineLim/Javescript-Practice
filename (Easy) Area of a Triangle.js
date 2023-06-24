/*
Write a function that takes the base and height of a triangle and return its area.

//-- FOR TESTING --/
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50

NOTES
    The area of a triangle is: (base * height) / 2
*/

const triArea = (a,b) => (a * b) / 2

console.log(triArea(3, 2)) // 3
console.log(triArea(7, 4)) // 14
console.log(triArea(10, 10)) // 50