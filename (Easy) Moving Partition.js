/*
Create a function to partition an array from left to right.

Examples
movingPartition([-1, -1, -1, -1])
➞ [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]

movingPartition([1, 2, 3, 4, 5])
➞ [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]

movingPartition([]) ➞ []

NOTES:
    With an n input, your output should be an array containing n-1 subarrays. 
    Each subarray should have two elements: the left and the right side of the partition 
    (both should be non-empty, unless the input array is empty).
    
    An empty array should return an empty array: []
*/

const movingPartition = (arg) => {
    let x = [];

    for(let i = 0; i < arg.length - 1; i++){
        let a = [];
        let b = [];

        for(let j = 0; j <= i; j++)
        {
            a.push(arg[j]);
        }

        for(let k = i + 1; k < arg.length; k++)
        {
            b.push(arg[k]);
        }

        x.push([a,b]);
    }
    
    return x;
}

console.log(movingPartition([-1, -1, -1, -1])) 
/* 
[
    [ [-1], [-1, -1, -1] ], 
    [ [-1, -1], [-1, -1] ], 
    [ [-1, -1, -1], [-1] ]
]
*/
console.log(movingPartition([1, 2, 3, 4, 5])) 
/*
[
    [ [1], [2, 3, 4, 5] ], 
    [ [1, 2], [3, 4, 5] ], 
    [ [1, 2, 3], [4, 5] ], 
    [ [1, 2, 3, 4], [5] ]
]
*/
console.log(movingPartition([])) // []