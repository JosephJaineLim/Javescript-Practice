/*
Create a function that concatenates n input arrays, where n is variable.

//-- FOR TESTING --//
concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]

NOTES:
Arrays should be concatenated in order of the arguments.
*/

const concati = (...args) => {
    //return args.flat(1);
    let t = new Array();
    args.forEach(el => t = t.concat(el));
    return t;
}

console.log(concati([1, 2, 3], [4, 5], [6, 7])) // [1, 2, 3, 4, 5, 6, 7]
console.log(concati([1], [2], [3], [4], [5], [6], [7])) // [1, 2, 3, 4, 5, 6, 7]
console.log(concati([1, 2], [3, 4])) // [1, 2, 3, 4]
console.log(concati([4, 4, 4, 4, 4])) // [4, 4, 4, 4, 4]