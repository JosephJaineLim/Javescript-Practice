/*
Create a function that takes two "sorted" arrays of numbers and returns an 
array of numbers which are common to both the input arrays.

//-- FOR TESTING --//

commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

NOTES: 
    Arrays are sorted.

    Try doing this problem with O(n + m) time complexity.
*/

const commonElements = (a,b) => {
    let c = [];

    b.forEach(element => {
        if(a.indexOf(element) >= 0)
        {
            c.push(element);
        }
    });

    return c;

}

console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])) // [3]
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])) // [1, 3, 4, 7]
console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])) // [1, 2, 4, 5]
console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])) // []