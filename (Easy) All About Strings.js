/*
Create a function that, given a string with at least three characters, returns an array of its:

Length.

First character.

Last character.

Middle character, if the string has an odd number of characters. 
Middle TWO characters, if the string has an even number of characters.

Index of the second occurrence of the second character in the format "@ index #" and "not found" 
if the second character doesn't occur again.

//-- FOR TESTING --//

allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]

allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

*/

const allAboutStrings = (arr) => {
    let array = []

    //LENGTH
    array.push(arr.length)

    //FIRST LETTER
    array.push(...arr[0])

    //LAST LETTER
    array.push(...arr[arr.length - 1])

    //MIDDLE NAME 
    arr.length % 2 === 1 ? array.push(...arr[Math.floor(arr.length / 2)]) : array.push([...arr[arr.length / 2 - 1], ...arr[(arr.length / 2)]].join(""));

    //INDEX 
    array.push([...arr].filter(el => el === [...arr][1]).length <= 1 ? "Not Found" : "@ index " + [...arr].map((el,index) => el === [...arr][1] && index !== 1 ? 1 : 0).indexOf(1));

    return array;
} 

console.log(allAboutStrings("LASA")) // [4, "L", "A", "AS", "@ index 3"]
console.log(allAboutStrings("Computer")) // [8, "C", "r", "pu", "not found"]
console.log(allAboutStrings("Science")) // [7, "S", "e", "e", "@ index 5"]
