/*
To further increase the statistical knowledge of your fight, 
count the number of times a certain adjective was used.

Given an object that contains several adjectives as values, 
return a new object where you count the ocurrences of each adjective.

//-- FOR TESTING --//

countNumberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }


countNumberOfOccurrences({
  a: "moron",
  b: "moron",
  c:"moron"
}) ➞ { moron: 3 }


countNumberOfOccurrences({
  a: "idiot",
  b: "scumbag"
}) ➞ { idiot: 1, scumbag: 1 }
*/

const countNumberOfOccurrences = (a) => {
    let obj = {};

    [...new Set(Object.values(a))].forEach(el => obj[el] = Object.values(a).filter(ele => ele === el).length);
    return obj;
}

console.log(countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
  })) // { moron: 2, scumbag: 1, idiot: 2 }
console.log(countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c:"moron"
  })) // { moron: 3 }
console.log(countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag"
  })) // { idiot: 1, scumbag: 1 }