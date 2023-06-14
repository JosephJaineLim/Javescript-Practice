/*
Create a function that takes two dates and returns the number of days between the first and second date.

//-- FOR TESTING --//

getDays(new Date("June 14, 2019"),new Date("June 20, 2019")) ➞ 6


getDays(new Date("December 29, 2018"),new Date("January 1, 2019")) ➞ 3
// Dates may not all be in the same month/year.


getDays(new Date("July 20, 2019"),new Date("July 30, 2019")) ➞ 10
*/


const getDays = (arr1, arr2) => {
    let days = Math.abs(arr1 - arr2); // declare days in positive millisecs;
    
    return days / 1000 / 60 / 60 / 24; // 1000 ms  = secs -> 60 secs = min -> 60 mins = hour -> 24hours = day 

}

console.log(getDays(new Date("June 14, 2019"),new Date("June 20, 2019"))) // 6
console.log(getDays(new Date("December 29, 2018"),new Date("January 1, 2019"))); // 3
console.log(getDays(new Date("July 20, 2019"),new Date("July 30, 2019"))) // 10
