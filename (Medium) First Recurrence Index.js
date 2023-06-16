/*
Create a function that identifies the very first item that has recurred in the string argument passed. 
It returns the identified item with the index where it first appeared 
and the very next index where it resurfaced -- entirely as an object; or 
as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

//-- FOR TESTING --//

recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}

*/

// DONT CHECK MY CODE. IT'S WORKING BUT ITS UGLY AND NOT STANDARD 
const recurIndex = (arr) => {
    let t;

    //Empty and Null Checker
    if(arr === "" || arr === null){
        return {};
    }

    // DXTDXTXDTXDS : Sample Input

    [...new Set(arr.split(""))] // [D,X,T] : Removes Duplicate and Store in an array
    .map(el => { // [[D, [0,3]], [X, [1,4]], [T, [2,5]], [S,[11,undefined]]] : Check where it first appeared and where it resurfaced
        let appeared = -1;
        let resurfaced = -1; 

        arr.split("").forEach((element,index) => {
            if(element === el && appeared < 0){
                appeared = index;
            }
            else if(element === el && appeared >= 0 && resurfaced < 0){
                resurfaced = index;
            }
        })

        return [el,[appeared,resurfaced]];
    })
    .filter(el => el.flat(1)[2] >= 0) // [[D, [0,3]], [X, [1,4]], [T, [2,5]]] : Remove Letters that didn't resurfaced
    .forEach(el => { // [[D, [0,3]] : Assign in a variable the letter that resurfaced first 
        if(!t){
            t = el;
        }
        else if(el.flat(1)[2] < t.flat(1)[2]){
            t = el;
        }
    })

    return Object.fromEntries([t]); // Make the array into an object
}

console.log(recurIndex("DXTDXTXDTXD")) // {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")) // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")) // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")) // {"D": [3, 7]}
console.log(recurIndex("")) // {}
console.log(recurIndex(null)) // {}