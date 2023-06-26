/*
Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

//-- FOR TESTING --//
orderedMatrix(5, 5) ➞ [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]

orderedMatrix(1, 1) ➞ [[1]]

orderedMatrix(1, 5) ➞ [[1, 2, 3, 4, 5]]

NOTES: 
    a is the height of the matrix (y coordinate), and b is the width (x coordinate).
    
    a and b will always be positive, and the matrix will always be square shaped (in each row are the same amount of columns).
    
    a and b are integers.
*/


const orderedMatrix = (a,b) => {
    let counter = 0;

    return Array.from(new Array(a), x => {
        return Array.from(new Array(b), x => {
            counter++;
            return counter;
        });
    });
};

console.log(orderedMatrix(5, 5)) 
/* 
[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
] 
*/
console.log(orderedMatrix(1, 1)) // [[1]]
console.log(orderedMatrix(1, 5)) // [[1, 2, 3, 4, 5]]