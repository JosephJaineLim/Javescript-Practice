/*
Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

//-- FOR TESTING --//
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞ "totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless"
*/

const add_suffix = (a) => (b) => b.concat(a)

add_ly = add_suffix("ly")

console.log(add_ly("hopeless")) // "hopelessly"
console.log(add_ly("total")) // "totally"

add_less = add_suffix("less")

console.log(add_less("fear")) // "fearless"
console.log(add_less("ruth")) // "ruthless"