/*
An array is positive dominant if it contains strictly more unique positive values than unique negative values. 
Write a function that returns true if an array is positive dominant.

//-- FOR TESTING --//

isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
// There is only 1 unique positive value (1).
// There are 2 unique negative values (-3, -4).

isPositiveDominant([5, 99, 832, -3, -4]) ➞ true

isPositiveDominant([5, 0]) ➞ true

isPositiveDominant([0, -4, -1]) ➞ false

Note: 0 counts as neither a positive nor a negative value.
*/


const isPositiveDominant = (arr) => {
    const t = [...new Set(arr)];

    return t.filter(el => el > 0).length > t.filter(el => el > 0 || el < 0).length/2
    
}


console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])) // false
console.log(isPositiveDominant([5, 99, 832, -3, -4])) // true
console.log(isPositiveDominant([5, 0])) // true
console.log(isPositiveDominant([0, -4])) //false