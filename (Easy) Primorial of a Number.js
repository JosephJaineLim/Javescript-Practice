/*
In mathematics, primorial, denoted by “#”, 
is a function from natural numbers to natural numbers similar to the factorial function, 
but rather than successively multiplying positive integers, the function only multiplies prime numbers.

Create a function that takes an integer n and returns its primorial.

//-- FOR TESTING --//

primorial(1) ➞ 2
// First prime number = 2

primorial(2) ➞ 6
// Product of first two prime numbers = 2*3 = 6

primorial(6) ➞ 30030

Note: 
n >= 1.
*/

const primorial = (arr) => {
    let prime = [];
    
    if(arr < 1)
    {
        return "Number should be more than 0";
    }

    for(let i = 2; prime.length !== arr; i++)
    {
        if(i <= 3)
        {
            prime.push(i);
        }
        else if(i % 2 > 0 && i % 3 > 0)
        {
            prime.push(i);
        }
    }

    return prime.reduce((acc, curr) => acc * curr);
}
 
console.log(primorial(1)) // 2
console.log(primorial(2)) // 6
console.log(primorial(6)) // 30030