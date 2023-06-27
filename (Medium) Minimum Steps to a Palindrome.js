/*
Given an incomplete palindrome as a string, return the minimum letters needed to 
be added on to the end to make the string a palindrome.

//-- FOR TESTING --//

minPalindromeSteps("race") ➞ 3
// Add 3 letters: "car" to make "racecar"

minPalindromeSteps("mada") ➞ 1
// Add 1 letter: "m" to make "madam"

minPalindromeSteps("mirror") ➞ 3
// Add 3 letters: "rim" to make "mirrorrim"

NOTES:
    Trivially, words which are already palindromes should return 0.
*/

const minPalindromeSteps = (a) => {
    let minPal;
    let b = a.split("").reverse();
    
    
    for(let i = 0; i < a.length; i++){
        b.shift();
        let temp = String(a + b.join("")).split("")
        
        if(!temp.map((el,ind) => temp[ind] === temp[temp.length - ind - 1]).includes(false))
        {
            minPal = b.length;
        }

    }
    
    return minPal;
}


console.log(minPalindromeSteps("race")) // 3
console.log(minPalindromeSteps("mada")) // 1
console.log(minPalindromeSteps("mirror")) // 3