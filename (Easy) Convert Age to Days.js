/*
Create a function that takes the age in years and returns the age in days.

//-- FOR TESTING --//

calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300

NOTES:
    Use 365 days as the length of a year for this challenge.

    Ignore leap years and days between last birthday and now.

    Expect only positive integer inputs.
*/

const DAYS_IN_A_YEAR = 365;

const calcAge = (a) => a * DAYS_IN_A_YEAR;

console.log(calcAge(65)) // 23725
console.log(calcAge(0)) // 0
console.log(calcAge(20)) // 7300