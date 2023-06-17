/*
Legendre's formula finds the exponent of the largest power of 
some prime p that divides (is a factor of) the factorial of some number n.

Legendre's formula example (p = 2 and n = 27):

So 2^23 is the largest power of 2 that divides 27!.

The formula returns the sum of many fractions (rounded down) with n 
as the numerator and a steadily increasing power of p as the denominator, 
stopping when it exceeds the numerator.

To illustrate:
p = 5
n = 100

int(100/5) + int(100/25)
    No 100/125 because 125 > 100.

Given p and n, return the result of Legendre's formula

//-- FOR TESTING --//

legendre(5, 100) ➞ 24

legendre(2, 128) ➞ 127

legendre(3, 50) ➞ 22

*/

const legendre = (p,n) => {
    
    let array = [];

    for(let i = 1; Math.pow(p,i) <= n; i++)
    {
        let t = Number(n / Math.pow(p,i));
        array.push(Math.floor(t));
    }

    return array.reduce((acc,curr) => acc + curr);
}

console.log(legendre(5, 100)); // 24
console.log(legendre(2, 128)); // 127
console.log(legendre(3, 50)); // 22
