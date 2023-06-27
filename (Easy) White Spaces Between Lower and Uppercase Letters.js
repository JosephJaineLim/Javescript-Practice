/*
Write a function that inserts a white space between every instance of a lower character 
followed immediately by an upper character.

//-- FOR TESTING --//

insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"

insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"

insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

NOTES:
    Each word in the phrase will be at least two characters long.
*/

const insertWhitespace = (a) => {
    let b = [];
    [...a].forEach((el, ind) =>{ 
        
        if(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90)
        {
            b.push(" ");
        }
        b.push(el)
    })

    return b.join("").trim();
}

console.log(insertWhitespace("SheWalksToTheBeach")) // "She Walks To The Beach"
console.log(insertWhitespace("MarvinTalksTooMuch")) // "Marvin Talks Too Much"
console.log(insertWhitespace("TheGreatestUpsetInHistory")) // "The Greatest Upset In History"