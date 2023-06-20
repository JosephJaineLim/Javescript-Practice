/*
Create a function that converts Celsius to Fahrenheit and vice versa.

//-- FOR TESTING 

convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"

NOTES:
    Round to the nearest integer.

    If the input is incorrect, return "Error".
*/

const convert = (arg) => {
    return arg.split("°").length < 2 ? "Error" : arg
    .split("°")
    .map((element,index) => {

        if (element.toLowerCase() === "c")
        {
            return "F";
        }
        else if (element.toLowerCase() === "f")
        {
            return "C";
        }
        else if(arg.split("°")[index + 1].toLowerCase() === "c")
        {
            return Number(element * (9 / 5) + 32).toFixed(0)  + "°";
        }
        else if(arg.split("°")[index + 1].toLowerCase() === "f")
        {
            return Number((element - 32) * (5/9)).toFixed(0) + "°";
        }
        
    })
    .join("");
} 

console.log(convert("35°C")) // "95°F"
console.log(convert("19°F")) // "-7°C"
console.log(convert("33")) // "Error"