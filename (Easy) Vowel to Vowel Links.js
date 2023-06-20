/*
Given a sentence as str, return true if any two adjacent words have this property: 
One word ends with a vowel, while the word immediately after begins with a vowel (a e i o u).

//-- FOR TESTING --//

vowelLinks("a very large appliance") ➞ true

vowelLinks("go to edabit") ➞ true

vowelLinks("an open fire") ➞ false

vowelLinks("a sudden applause") ➞ false

NOTES:

    You can expect sentences in lowercase/uppercase.
*/

const vowelLinks = (arg) => {
    const vowel = ['a','e','i','o','u'];
    let isVowelToVowel = false;

    arg
    .toLowerCase()
    .split("")
    .forEach((element,index) => {
        if(vowel.indexOf(element) >= 0 && [...arg.toLowerCase()][index+1] === " " && vowel.indexOf([...arg.toLowerCase()][index+2]) >= 0)
        {
            isVowelToVowel = true;
        }
    });

    return isVowelToVowel;

}

console.log(vowelLinks("a very large appliance")) // true
console.log(vowelLinks("go to edabit")) // true
console.log(vowelLinks("an open fire")) // false
console.log(vowelLinks("a sudden applause")) // false