/*
Create a function to check if a given integer is a factorial of integer or not. The return value should be a boolean.

//-- FOR TESTING --//
isFactorial(2) ➞ true
// 2 = 2 * 1 = 2!

isFactorial(27) ➞ false

isFactorial(24) ➞ true
// 24 = 4 * 3 * 2 * 1 = 4!

NOTES: 
    Input is a positive integer.

    Alternatively, you can solve this with a recursive approach.
*/

const isFactorial = (arg) => {
    let factorial = 1; 

    for(let i = 1; factorial < arg; i++)
    {
        factorial *= i;
    } 
    return factorial === arg;
}
console.log(isFactorial(2)) // true
console.log(isFactorial(27)) // false
console.log(isFactorial(24)) // true



/////////////////////// RECURSIVE APPROACH /////////////////////// 
const isFactorialRecursive = (arg) => {
    let temp = 1; 
    while(factorial(temp) < arg)
    {
        temp++
    }

    return arg === factorial(temp);
}

const factorial = (num) =>{
    if(num === 0) return 1;

    return num * factorial(num - 1);
}

console.log(isFactorialRecursive(2)) // true
console.log(isFactorialRecursive(27)) // false
console.log(isFactorialRecursive(24)) // true