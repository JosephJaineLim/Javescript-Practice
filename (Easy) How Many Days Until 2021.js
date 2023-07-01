/*
Given a date, return how many days date is away from 2021 (end date not included). 
date will be in mm/dd/yyyy format.

//-- FOR TESTING --//
daysUntil2021("12/28/2020") ➞ "3 days"

daysUntil2021("1/1/2020") ➞ "366 days"

daysUntil2021("2/28/2020") ➞ "308 days"

NOTES:
    All given dates will be in the year 2020.
*/
const daysUntil2021 = (a) => (new Date("1/1/2021") - new Date(a)) / 1000 / 60 / 60 / 24 + " days"

console.log(daysUntil2021("12/28/2020")) // "4 days"
console.log(daysUntil2021("1/1/2020")) // "366 days"
console.log(daysUntil2021("2/28/2020")) // "308 days"
