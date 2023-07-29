/*
In this challenge you will be given an array similar to the following:

[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

//-- FOR TESTING --//
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]

NOTES: 

To reiterate, elements of the array will be either integers or arrays with a single integer.
*/

const sortIt = (a) => {
    return a.sort((x,y)=>{
        if(x.length)
        {
            x = x[0];
        }
        if(y.length)
        {
            y = y[0]
        }

        return x-y
    })
}

console.log(sortIt([4, 1, 3])) // [1, 3, 4]

console.log(sortIt([[4], [1], [3]])) // [[1], [3], [4]]

console.log(sortIt([4, [1], 3])) // [[1], 3, 4]

console.log(sortIt([[4], 1, [3]])) // [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6])) // [1, [2], [3], 4, [5], 6]