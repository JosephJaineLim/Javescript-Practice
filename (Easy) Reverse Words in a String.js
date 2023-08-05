/*
Given an input string, reverse the string word by word, the first word will be the last, and so on.

//-- FOR TESTING --//
reverseWords(" the sky is blue") ➞ "blue is sky the"

reverseWords("hello   world!  ") ➞ "world! hello"

reverseWords("a good example") ➞ "example good a"
Notes
A word is defined as a sequence of non-space characters.

The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.

You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
const reverseWords = (a) => a.trim().split(' ').reverse().join(' ')
console.log(reverseWords(" the sky is blue")) // "blue is sky the"

console.log(reverseWords("hello   world!  ")) // "world! hello"

console.log(reverseWords("a good example")) // "example good a"