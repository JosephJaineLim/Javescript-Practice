/*
Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.

//-- FOR TESTING --//

hoursPassed("3:00 AM", "9:00 AM") ➞ "6 hours"

hoursPassed("2:00 PM", "4:00 PM") ➞ "2 hours"

hoursPassed("1:00 AM", "3:00 PM") ➞ "14 hours"

NOTES:
    Time t1 will always be the starting time and t2, the ending time.

    Return the string "No time has passed." if t1 is equal to t2.
*/

const hoursPassed = (a,b) => {
    let c = Number(b.split(":")[0]) - Number(a.split(":")[0])

    if(a.split(" ")[1] !== b.split(" ")[1] && a.split(" ")[1] !== "PM")
    {
        c += 12;
    }
    
    
    return c + " hours"; 
}

console.log(hoursPassed("3:00 AM", "9:00 AM")) // "6 hours"
console.log(hoursPassed("2:00 PM", "4:00 PM")) // "2 hours"
console.log(hoursPassed("1:00 AM", "3:00 PM")) // "14 hours"