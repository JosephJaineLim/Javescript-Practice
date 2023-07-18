/*
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

//-- FOR TESTING --//
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

NOTES:

Notice that num is also included in the returned array.
*/

const arrayOfMultiples = (a,b) => {
    let c = new Array();
    for(let i = 1; i <= b; i++)
    {
        c.push(i*a);
    }

    return c;
}

console.log(arrayOfMultiples(7, 5)) // [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // [17, 34, 51, 68, 85, 102]