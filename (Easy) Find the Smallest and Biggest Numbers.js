/*
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//-- FOR TESTING --//

minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]

NOTES
All test arrays will have at least one element and are valid.
*/

const minMax = (arr) => {
    let a = arr.sort((a,b) => a - b);

    return [a[0],a[a.length-1]]
}

console.log(minMax([1, 2, 3, 4, 5])) // [1, 5]
console.log(minMax([2334454, 5])) // [5, 2334454]
console.log(minMax([1])) //➞ [1, 1]