/*
Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

//-- FOR TESTING --//
zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]

zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]

zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]

zeroesToEnd([0, 0]) ➞ [0, 0]

NOTES:
    You must mutate the original array.

    Keep the relative order of the non-zero elements the same.
*/


const zeroesToEnd = (arr) => {
    let nonZero = arr.filter(el => el > 0);
    let zeroes = arr.filter(el => el === 0);

    for(let i = nonZero.length - 1; i >= 0; i--)
    {
        arr.unshift(nonZero[i]);
        arr.pop();
    }

    arr.fill(0,arr.length - zeroes.length);
    return arr;
}


console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])) // [1, 2, 4, 5, 0, 0, 0]
console.log(zeroesToEnd([0, 0, 2, 0, 5])) // [2, 5, 0, 0, 0]
console.log(zeroesToEnd([4, 4, 5])) // [4, 4, 5]
console.log(zeroesToEnd([0, 0])) //[0, 0]