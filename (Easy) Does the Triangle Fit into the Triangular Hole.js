/*
Create a function that takes the dimensions of two triangles (as arrays) 
and checks if the first triangle fits into the second one.

//-- FOR TESTING --//

doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false

NOTES:
    Triangle fits if it has the same or smaller size as the hole.
    
    The function should return false if the triangle with that dimensions is not possible.
*/

const doesTriangleFit = (a,b) => {

    const p = (arr) => [...arr].reduce((x,y) => x + y) / 2; 

    c = a.reduce((x,y) => x * (p(a) - y),1) * p(a);
    d = b.reduce((x,y) => x * (p(b) - y),1) * p(b);

    return  c <= 0 ? false : d <= 0 ? false : c <= d;
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1])) // true
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2])) // true
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2])) // false
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6])) // false