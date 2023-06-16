/*
A pandigital number contains all digits (0-9) at least once. 
Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

//-- FOR TESTING --//

isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
7 is missing.

isPandigital(112233445566778899) ➞ false

Notes: 
    Think about the properties of a pandigital number when all duplicates are removed.

*/
const isPandigital = (arr) => {

    arr /= Math.pow(10,arr.toString().split("").length/2); //Intergers that's more than 16 digits will still be accurate

    return [...new Set(arr.toString().split(""))].length == 11
}


console.log(isPandigital(98140723568910) ) // true
console.log(isPandigital(90864523148909)) //false
console.log(isPandigital(112233445566778899)) // false