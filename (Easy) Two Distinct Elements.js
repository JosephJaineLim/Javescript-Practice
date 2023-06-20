/*
In each input array, every number repeats at least once, except for two. 
Write a function that returns the two unique numbers.

//-- FOR TESTING --//

returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]

NOTES:
    Keep the same ordering in the output.
*/

const returnUnique = (arr) => {
    let array = [];
    [...new Set(arr)].forEach(ele => arr.filter(el => el === ele).length === 1 ? array.push(ele) : "Do nothing")

    return array;
}

console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])) // [9, 7]
console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])) // [2, 1]
console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])) // [5, 6]