/* 
Create a function that returns the frequency distribution of an array. This function should return an object, 
where the keys are the unique elements and the values are the frequency in which those elements occur.

//-- FOR TESTING --//

getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}

*/

const getFrequencies = (arr) => {
    const arry = [... new Set(arr)].map((el) => [el,arr.filter(element => element === el).length]);
    return Object.fromEntries(arry);
}

console.log(getFrequencies(["A", "B", "A", "A", "A"])); // { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2])); // { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false]) ); // { true: 2, false: 3 }
console.log(getFrequencies([])); {}