/*
Write a function that returns the minimum number of swaps to convert the first binary string into the second.

//-- FOR TESTING --//

minSwaps("1100", "1001") ➞ 1

minSwaps("110011", "010111") ➞ 1

minSwaps("10011001", "01100110") ➞ 4

NOTES: 
    Both binary strings will be of equal length.

    Both binary strings will have an equal number of zeroes and ones.

    A swap is switching two elements in a string (swaps do not have to be adjacent).
*/


const minSwaps = (arr,arr2) => {
    let t = 0; 

    for(let i = 0; i < arr.split("").length; i++)
    {
        if(arr.split("")[i] !== arr2.split("")[i])
        {
            t++;
        }
    }

    return t / 2;
}

console.log(minSwaps("1100", "1001")) // 1
console.log(minSwaps("110011", "010111")) // 1
console.log(minSwaps("10011001", "01100110")) //4
