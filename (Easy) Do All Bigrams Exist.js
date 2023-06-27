/*
You are given an input array of bigrams, and an array of words.

Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

//-- FOR TESTING --//

canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
# "cu" does not exist in any of the words.

canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

NOTES:
    A bigram is string of two consecutive characters in the same word.

    If the array of words is empty, return false.
*/

const canFind = (a,b) => {
    let result = true;
    
    a.forEach(el => {
        if(!b.join("").includes(el))
        {
            result = false;
        }
    })
    
    return result;
}

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"])) // true
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"])) // false
console.log(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"])) // true
console.log(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"])) // false