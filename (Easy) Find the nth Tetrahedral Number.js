/*
A tetrahedron is a pyramid with a triangular base and three sides. 
A tetrahedral number is a number of items within a tetrahedron.

Create a function that takes an integer n and returns the nth tetrahedral number.

//-- FOR TESTING --/

tetra(2) ➞ 4

tetra(5) ➞ 35

tetra(6) ➞ 56
*/
//console.log([5,4,3,2,1].reduceRight((a,b) => c => b))

//console.log(x => 2 * x(2));



const tetra = (n) => (n * (n + 1) * (n + 2)) / 6

console.log(tetra(2)) // 4
console.log(tetra(5)) // 35
console.log(tetra(6)) // 56

