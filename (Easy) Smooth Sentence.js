/*
Carlos is a huge fan of something he calls smooth sentences.

A smooth sentence is one where the last letter of each word is identical to the first letter the following word 
(and not case sensitive, so "A" would be the same as "a").

The following would be a smooth sentence "Carlos swam masterfully" because "Carlos" ends with an "s" and 
swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".

Create a function that determines whether the input sentence is a smooth sentence, 
returning a boolean value true if it is, false if it is not.

//-- FOR TESTING --//

isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

isSmooth("Someone is outside the doorway") ➞ false

isSmooth("She eats super righteously") ➞ true

NOTES: 
    The last and first letters are case insensitive.

    There will be no punctuation in each sentence.
*/

// THIS CODE IS NOT STANDARD

const isSmooth = (arg) => {
    return arg.split(" ").map((el,ind) => {
        let tempArr = arg.split(" ");
        if(ind + 1 === tempArr.length && tempArr[ind - 1].split("")[tempArr[ind - 1].split("").length - 1] === tempArr[ind].split("")[0]) return 1
        if(ind + 1 < tempArr.length && tempArr[ind].split("")[tempArr[ind].split("").length - 1] === tempArr[ind +1].split("")[0]) return 1
        else return 0;
    }).includes(0) ? false: true;
}

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids")) // true
console.log(isSmooth("Someone is outside the doorway")) // false
console.log(isSmooth("She eats super righteously")) // true