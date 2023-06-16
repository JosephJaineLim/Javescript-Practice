/* 
When coloring a striped pattern, you may start by coloring each square sequentially, 
meaning you spend time needing to switch coloring pencils.

Create a function where given an array of colors cols, return how long it takes to color the whole pattern. 

//-- FOR TESTING  --//
    colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"]) ➞ 14

    Explanation: 
    There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
    You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
    10 + 4 = 14  

    colorPatternTimes(["Blue"]) ➞ 2

    colorPatternTimes(["Red", "Yellow", "Green", "Blue"]) ➞ 11

    colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]) ➞ 13

NOTES: 
    It takes 1 second to switch between pencils.

    It takes 2 seconds to color a square.
*/ 


const colorPatternTimes = (arr) => {
    let accumulator = 0;
    arr.forEach((el, index) => {
        accumulator += 2;
        if(el !== arr[index + 1] && index !== arr.length - 1){
            accumulator++;
        }
    });

    return accumulator;
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])) //14
console.log(colorPatternTimes(["Blue"])) // 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])) // 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])) // 13