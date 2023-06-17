/*
Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. 
So the easy explanation is: The next element is the sum of the two previous elements.

//-- FOR TESTING --//

fibSeq(4) ➞ [0, 1, 1, 2]

fibSeq(7) ➞ [0, 1, 1, 2, 3, 5, 8]

fibSeq(0) ➞ []

NOTES: 
    If 0 is given, return an empty array.
    
    If no argument is given, return undefined.
    
    The input will never be a negative integer.
*/

const fibSeq = (arr) => {

    if(arr === 0)
    {
        return [];
    }
    else if(!arr)
    {
        return;
    }
    else if(arr === 1)
    {
        return [0];
    }

    let t = [0,1];

    for(let i = 0; i < arr - 2; i++)
    {
        t.push(t[i] + t[i+1]);
    }

    return t;
}

console.log(fibSeq(4)) // [0, 1, 1, 2]
console.log(fibSeq(7)) // [0, 1, 1, 2, 3, 5, 8]
console.log(fibSeq(0)) // []