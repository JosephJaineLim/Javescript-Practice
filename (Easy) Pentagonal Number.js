/*
Write a function that takes a positive integer num and calculates how many dots exist in 
a pentagonal shape around the center dot on the Nth iteration.

In the image below you can see the first iteration is only a single dot. 
On the second, there are 6 dots. On the third, 
there are 16 dots, and on the fourth there are 31 dots.

IMAGE LINK : https://edabit-challenges.s3.amazonaws.com/pentagonal_number.png

Return the number of dots that exist in the whole pentagon on the Nth iteration.

ADDITIONAL RESOURCES:
    https://www.numbersaplenty.com/set/centered_pentagonal_number/

//-- FOR TESTING --//

pentagonal(1) ➞ 1

pentagonal(2) ➞ 6

pentagonal(3) ➞ 16

pentagonal(8) ➞ 141

*/

const pentagonal = (arr) => ((5 * Math.pow(arr,2)) - (5 * arr) + 2) / 2

console.log(pentagonal(1)) // 1
console.log(pentagonal(2)) // 6
console.log(pentagonal(3)) // 16
console.log(pentagonal(8)) // 141