/*
A boomerang is a V-shaped sequence that is either upright or upside down. 
Specifically, a boomerang can be defined as: sub-array of length 3, 
with the first and last digits being the same and the middle digit being different.

EXAMPLES 
[3, 7, 3], [1, -1, 1], [5, 6, 5]


//--INSTRUCTIONS --//
Create a function that returns the total number of boomerangs in an array.

[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], and [2, -2, 2]

Be aware that boomerangs can overlap, like so:
[1, 7, 1, 7, 1, 7, 1]
5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]

//-- FOR TESTING --//
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2

countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1

countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

*/
const countBoomerangs = (arr) =>{
    let boomerang = 0;
    arr.forEach((x,y) => {
        if(arr[y-1] === arr[y+1] && x !== arr[y+1])
        {
            boomerang++
        }
    })

    return boomerang;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])) // 2
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])) // 1
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])) // 0

console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2])) // 3
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1])) // 5
