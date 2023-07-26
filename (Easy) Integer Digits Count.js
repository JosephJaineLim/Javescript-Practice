/*
Create a function that counts the integer's number of digits.

//-- FOR TESTING --//
count(318) ➞ 3
 
count(-92563) ➞ 5
 
count(4666) ➞ 4

count(-314890) ➞ 6

count(654321) ➞ 6

count(638476) ➞ 6

NOTES:

For an added challenge, try to solve this without using strings.

Alternatively, you can solve this via a recursive approach.
*/

const count = (a) => {
    let counter = 0;
    let temp = 10;
    a = Math.abs(a);
    initA = a;

    while(a >= 0)
    {
        a = initA;
        a -= temp;
        temp *= 10;
        counter++;
    }

    return counter;
}
console.log(count(100)) // 3
 
console.log(count(-92563)) // 5
 
console.log(count(4666)) // 4

console.log(count(-314890)) // 6

console.log(count(654321)) // 6

console.log(count(638476)) // 6
