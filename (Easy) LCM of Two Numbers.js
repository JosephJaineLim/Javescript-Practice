/*
Write a function that returns the least common multiple (LCM) of two integers.

//-- FOR TESTING --//
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187

Notes:
    Both values will be positive.

    The LCM is the smallest integer that is divisible by both numbers such that the remainder is zero.
*/

const lcm = (arr, arr2) => {
    let lcm = 1;

    while(true)
    {
        if(lcm % arr === 0 && lcm % arr2 === 0)
        {
            return lcm;
        }
        else
        {
            lcm++;
        }
    }
}

console.log(lcm(9, 18))  // 18
console.log(lcm(8, 5))  // 40
console.log(lcm(17, 11))  // 187
