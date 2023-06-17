/*
Create a function that outputs the result of a math expression in words.

//-- FOR TESTING --//

wordedMath("One plus one") ➞ "Two"

wordedMath("zero Plus one") ➞ "One"

wordedMath("one minus one") ➞ "Zero"

NOTES:
    Expect only the operations plus and minus.

    Expect to only get numbers and answers from 0 to 2.

    The first letter of the answer must be capitalised.

*/

const wordedMath = (arr) => {
    let t = []
    const num = ["zero","one","two"];
    const ope = ["plus", "minus"]
    let ans = 0;

    t = arr.split(" ").map(el => num.indexOf(el.toLowerCase()) >= 0 ? num.indexOf(el.toLowerCase()) : ope.indexOf(el.toLowerCase()) === 0 ? "+" : ope.indexOf(el.toLowerCase()) === 1 ? "-" : el)
    
    return num[eval(t.join(" "))].replace(/^./, str => str.toUpperCase())
}

console.log(wordedMath("One plus one")) // "Two"
console.log(wordedMath("zero Plus one")) // "One"
console.log(wordedMath("one minus one")) // "Zero"