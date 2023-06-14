/*
Create a function that takes a variable number of arguments, 
each argument representing the number of items in a group. 
The function should return the number of permutations (combinations) 
of choices you would have if you selected one item from each group.

//-- FOR TESTING --//
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120

*/


const combinations = (...arr) => arr.reduce((acc, curr) => acc *= curr);


console.log(combinations(2, 3)) // 6
console.log(combinations(3, 7, 4)) // 84
console.log(combinations(2, 3, 4, 5)) // 120