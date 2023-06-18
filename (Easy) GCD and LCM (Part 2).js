/*
Create a function that takes two numbers as arguments and return the LCM of the two numbers.

//-- FOR TESTING --// 
lcm(3, 5) ➞ 15

lcm(14, 28) ➞ 28

lcm(4, 6) ➞ 12

NOTES: 
    Don't forget to return the result.

    You may want to use the GCD function to make this a little easier.

    LCM stands for least common multiple, the smallest multiple of both integers.
*/


const lcm = (a,b) => {
    let lcm = 1;

    while(true)
    {
        if(lcm % a === 0 && lcm % b === 0) 
        {
            return lcm;
        }
        else 
        {
            lcm++;
        }
    }
}

console.log(lcm(3, 5)) // 15
console.log(lcm(14, 28)) // 28
console.log(lcm(4, 6)) // 12