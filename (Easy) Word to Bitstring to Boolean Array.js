/* 
Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

Locate the position of the letter in the English alphabet (from 1 to 26).
Odd positions will be represented as 1 and even positions will be represented as 0.
Convert the represented positions to boolean values, 1 for true and 0 for false.
Store the conversions into an array.

//-- FOR TESTING --//

toBoolArray("deep") ➞ [false, true, true, false]
// deep converts to 0110
// d is the 4th alphabet - 0
// e is the 5th alphabet - 1
// e is the 5th alphabet - 1
// p is the 16th alphabet - 0

toBoolArray("loves") ➞ [false, true, false, true, true]

toBoolArray("tesh") ➞ [false, true, true, false]

NOTES: 
    The letter A is at position 1 and Z at 26.

    All input strings are in lowercase letters of the English alphabet
*/

const toBoolArray = (arr) => {
    const t = arr
    .toLowerCase()
    .split("")
    .map(el => (el.charCodeAt() - 96) % 2 === 1);

    return t;
}


console.log(toBoolArray("deep")); // [false, true, true, false]
console.log(toBoolArray("loves")); // [false, true, false, true, true]
console.log(toBoolArray("tesh")); // [false, true, true, false]