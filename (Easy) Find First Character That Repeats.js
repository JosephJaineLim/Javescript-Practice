/*
Create a function that takes a string and returns the first character that repeats. 
If there is no repeat of a character, return "-1".

//-- FOR TESTING --//

firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

NOTES:
Tests are case sensitive.
*/

const firstRepeat = (a) => {
    let b = "";
    [...new Set(a)].forEach(el => {
        if([...a].indexOf(el) !== [...a].lastIndexOf(el))
        {
            b += el;
        }
    })

    return b || -1;
}

console.log(firstRepeat("legolas")) // "l"
console.log(firstRepeat("Gandalf")) // "a"
console.log(firstRepeat("Balrog")) // "-1"
console.log(firstRepeat("Isildur")) // "-1"