/* 
Given a known number of unique items, how many ways could we arrange them in a row?

Create a function that takes an integer n and returns the number of digits of 
the number of possible permutations for n unique items. For instance, 
5 unique items could be arranged in 120 unique ways. 120 has 3 digits, hence the integer 3 is returned.

//-- FOR TESTING --//

noPermsDigits(0) ➞ 1

noPermsDigits(1) ➞ 1

noPermsDigits(5) ➞ 3

noPermsDigits(8) ➞ 5

*/


const noPermsDigits = (arr) => {
    let t = 1;

    for(let i = 1; i <= arr; i++)
    {
        t *= i;
    }

    return t.toString().split("").length;
}



console.log(noPermsDigits(0)) //1
console.log(noPermsDigits(1)) //1
console.log(noPermsDigits(5)) //3 
console.log(noPermsDigits(8)) //5