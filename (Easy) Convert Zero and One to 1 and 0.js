/* 
Create a function that takes a string as an argument. 
The function must return a string containing 1s and 0s based on the string argument's words. 
If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. 
The returned string's length should be a multiple of 8, 
if the string is not a multiple of 8 you should remove the numbers in excess.

//-- FOR TESTING --//

textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

textToNumberBinary("Zero one zero ONE zero one zero one") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero one one two") ➞ "01010101"

textToNumberBinary("zero one zero one zero one zero three") ➞ ""

textToNumberBinary("one one") ➞ ""

*/

const textToNumberBinary = (arr) => {
    const ZERO_ONE = ["zero", "one"];
    let array = [];

    array = arr.split(" ").map(el => ZERO_ONE.indexOf(el.toLowerCase()));

    if(array.length < 8)
    {
        return "Less than 8";
    }
    else if(array.indexOf(-1) > 0 && array.length === 8)
    {
        return "Not Valid";
    }
    else
    {
        let t = [];
        for(let i = 0; i < 8; i++)
        {
            t.push(array[i]);
        }
        return t.join("");
    }

}

console.log(textToNumberBinary("zero one zero one zero one zero one")) // "01010101"
console.log(textToNumberBinary("Zero one zero ONE zero one zero one")) // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero one one two")) // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero three")) // ""
console.log(textToNumberBinary("one one")) // ""
