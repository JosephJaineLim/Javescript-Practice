/*
Write a function that returns the longest non-repeating substring for a string input.

//-- FOR TESTING --//

longestNonrepeatingSubstring("abcabcbb") ➞ "abc"

longestNonrepeatingSubstring("aaaaaa") ➞ "a"

longestNonrepeatingSubstring("abcde") ➞ "abcde"

longestNonrepeatingSubstring("abcda") ➞ "abcd"

NOTES:
    If multiple substrings tie in length, return the one which occurs first.
    Bonus: Can you solve this problem in linear time?
*/

const longestNonrepeatingSubstring = (a) => {
    let logestString = [];

    [...a].forEach((el, ind )=> {
        let temp = [];
        
        for(let i = ind; i < [...a].length; i++)
        {
            if(temp.length === [...new Set([...temp])].length && !temp.includes([...a][i]))
            {
                temp.push([...a][i]);
            }
            else
            {
                break;
            }
        }

        if(temp.length > logestString.length)
        {
            logestString = temp;
        }
    });

    return logestString.join("");
}

console.log(longestNonrepeatingSubstring("abcabcbbyxz")) // "bxyz"
console.log(longestNonrepeatingSubstring("aaaaaa")) // "a"
console.log(longestNonrepeatingSubstring("abcde")) // "abcde"
console.log(longestNonrepeatingSubstring("abcda")) // "abcd"