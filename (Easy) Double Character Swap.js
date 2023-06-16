/* 
Write a function to replace all instances of character c1 with character c2 and vice versa.

//-- FOR TESTING --//

doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

doubleSwap("random w#rds writt&n h&r&", "#", "&")
➞ "random w&rds writt#n h#r#"

doubleSwap("128 895 556 788 999", "8", "9")
➞ "129 985 556 799 888"

*/
const doubleSwap = (a,b,c) => a.split("").map(el => el === b ? el = c : el === c ? el = b : el).join("");

console.log(doubleSwap( "aabbccc", "a", "b")) // "bbaaccc"
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&")) // "random w&rds writt#n h#r#"
console.log(doubleSwap("128 895 556 788 999", "8", "9")) // "129 985 556 799 888"