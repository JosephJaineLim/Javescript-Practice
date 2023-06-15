/* 
Given a string, reverse all the words which have odd length. The even length words are not changed.

//-- FOR TESTING --//
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"

Notes:
    There is exactly one space between each word and no punctuation is used.
*/


const reverseOdd = (arr) => {
    let t = "";
    arr.split(" ").forEach((el,index) => {
        if(el.length % 2 === 1) //odd
        {
            t += el.split("").reverse().join("");
        }
        else //even
        {
            t += el;
        }

        if(arr.split(" ").length - 1 !== index){
            t += " ";
        }
    });

    return t;
}

console.log(reverseOdd("Bananas")) // "sananaB"
console.log(reverseOdd("One two three four")) // "enO owt eerht four"
console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length")) //"Make sure you only reverse words of odd length"