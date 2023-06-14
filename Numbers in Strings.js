/*
Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.

//-- FOR TESTING --//

numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]

*/


const numInStr = (arr) => {
    let x = [];

    arr.forEach((a,b) => {
        a.split("").forEach((c) =>  
        {
            if(c.charCodeAt() >= 48 && c.charCodeAt() <= 57 && x.indexOf(arr[b]) < 0)
            {
                x.push(arr[b]);
            }
        })
    })

    return x;
}


console.log(numInStr(["1a", "a", "2b", "b"])) // ["1a", "2b"]
console.log(numInStr(["abc", "abc10"])) // ["abc10"]
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) // ["ab10c", "a10bc"]
console.log(numInStr(["this is a test", "test1"])) // ["test1"]