/*
Create a function that returns true if there's at least one prime number 
in the given range (n1 to n2 (inclusive)), false otherwise.

//-- FOR TESTING --//

primeInRange(10, 15) ➞ true
// Prime numbers in range: 11, 13

primeInRange(62, 66) ➞ false
// No prime numbers in range.

primeInRange(3, 5) ➞ true
// Prime numbers in range: 3, 5

NOTES:
    n2 is always greater than n1.
    
    n1 and n2 are always positive.
    
    0 and 1 aren't prime numbers.
*/

const primeInRange = (a,b) => {
    let isPrime = false; 

    for(let i = a; i <= b; i++)
    {
        if(i === 2)
        {
            isPrime = true;
        }
        else if(i === 3)
        {
            isPrime = true;
        }
        else if(i === 5)
        {
            isPrime = true;
        }
        else if(i % 2 > 0 && i % 3 > 0 && i % 5 > 0)
        {
            isPrime = true;
        }
    }
    
    
    return isPrime;
}
console.log(primeInRange(10, 15)) // true
console.log(primeInRange(62, 66)) // false
console.log(primeInRange(8, 11)) // true