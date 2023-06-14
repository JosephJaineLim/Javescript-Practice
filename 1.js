/*
Create a FUNCTION that takes an array of numbers and return "Boom!" 
if the digit 7 appears in the array. 
Otherwise, return "there is no 7 in the array".

//---EXAMPLE OUTPUT--//

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
-7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "There's no 7 in the array."
-None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
-97 contains the number seven.

*/



const sevenBoom = (arr) => arr.indexOf(7) > 0 ? "Boom!" : "There's no 7 in the array.";

console.log(sevenBoom([1,2,7])); // Boom
console.log(sevenBoom([1,2,3])); // No 7 