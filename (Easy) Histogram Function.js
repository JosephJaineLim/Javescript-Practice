/* 
Build a function that creates histograms. 
Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. 
The second argument of the function represents the character to be used for the bar.

histogram(arr, char) ➞ str

//-- FOR TESTING --//
histogram([1, 3, 4], "#") ➞ "#\n###\n####"

#
###
####

histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="

======
==
===============
===

histogram([1, 10], "+") ➞ "+\n++++++++++"

+
++++++++++

*/

const histogram = (arr,arr2) => {
    const t = arr.map(el => arr2.repeat(el));

    return t.join("\n");
}

console.log(histogram([1, 3, 4], "#")) // # ### ####
console.log(histogram([6, 2, 15, 3], "=")) // ====== == =============== ===
console.log(histogram([1, 10], "+")) // + ++++++++++

