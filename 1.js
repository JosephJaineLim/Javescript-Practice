/*
Create a FUNCTION that takes an array of numbers and return "Boom!" 
if the digit 7 appears in the array. 
Otherwise, return "there is no 7 in the array".

//---FOR TESTING--//

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
-7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "There's no 7 in the array."
-None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
-97 contains the number seven.

*/



const sevenBoom = (arr) => {
    let t = []
    arr.forEach(el => t.push(el.toString().split("")))
    return t.flat().indexOf('7') > 0 ? "Boom" : "There's no 7 in the Array";
}


console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // Boom 
console.log(sevenBoom([8, 6, 33, 100])); // No 7 
console.log(sevenBoom([2, 55, 60, 97, 86])); // Boom 

