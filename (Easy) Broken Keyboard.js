/*
Given what is supposed to be typed and what is actually typed, 
write a function that returns the broken key(s). The function looks like:

findBrokenKeys(correct phrase, what you actually typed)

//-- FOR TESTING --//

findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

Notes:
    Broken keys should be ordered by when they first appear in the sentence.

    Only one broken key per letter should be listed.

    Letters will all be in lower case.
*/

const findBrokenKeys = (a,b) => {
    let c = [];
    [...a].forEach((el,index) => el === [...b][index] ? true : c.push(el)) 

    return [...new Set(c)];
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday")) // ["p"]
console.log(findBrokenKeys("starry night", "starrq light")) // ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5")) // ["b", "e", "v", "n"]