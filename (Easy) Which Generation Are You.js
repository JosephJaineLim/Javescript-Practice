/*
Try finding your ancestors and offspring with code.

Create a function that takes a number x and a character y ("m" for male, "f" for female), 
and returns the name of an ancestor (m/f) or descendant (m/f).

If the number is negative, return the related ancestor.
If positive, return the related descendant.
You are generation 0. In the case of 0 (male or female), return "me!".

//-- FOR TESTING --//
generation(2, "f") ➞ "granddaughter"

generation(-3, "m") ➞ "great grandfather"

generation(1, "f") ➞ "daughter"

NOTES:

    Generation	    Male	                Female
    -3	            great grandfather	    great grandmother
    -2	            grandfather	            grandmother
    -1	            father	                mother
    0	            me!	                    me!
    1	            son	                    daughter
    2	            grandson	            granddaughter
    3	            great grandson	        great granddaughter
*/

const GENERATIONS = [
    {m: "great grandfather", f: "great grandmother"},
    {m:"grandfather",f:"grandmother"},
    {m:"father",f:"mother"},
    {m:"me!",f:"me!"},
    {m:"son",f:"daugther"},
    {m:"grandson",f:"granddaugther"},
    {m:"great grandson",f: "great granddaugther"}
]

const generation = (a,b) => GENERATIONS[a + 3][b]

console.log(generation(2, "f")) // "granddaughter"
console.log(generation(-3, "m")) // "great grandfather"
console.log(generation(1, "f")) // "daughter"

