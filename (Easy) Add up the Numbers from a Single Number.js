/*
Create a function that takes a number as an argument. 
Add up all the numbers from 1 to the number you passed to the function. For example, 
if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//-- FOR TESTING --//

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
*/

const addUp = (a) => {
    if(a === 0) return 0;
    if(a > 0) return a + addUp(a-1);
}

console.log(addUp(4)) // 10
console.log(addUp(13)) // 91
console.log(addUp(600)) // 180300
