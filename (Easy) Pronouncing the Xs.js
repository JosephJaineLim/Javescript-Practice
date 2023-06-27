/*
Create a function which replaces all the x's in the string in the following ways:

Replace all x's with "cks" UNLESS:

    The word begins with "x", therefore replace it with "z".

    The word is just the letter "x", therefore replace it with "ecks".

//-- FOR TESTING --//

xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"

xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"

xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"

NOTES:
    All x's are lowercase.

    I know that not all words with x's follow this rule, but there are too many edge cases to count!
*/

const xPronounce = (a) => {
    return a.split(" ")
    .map(el => {
        if(el.length === 1 && el === "x")
        {
            return "ecks"
        }
        else if([...el].shift() === "x")
        {
            return el.replace("x","z");
        }
        else if(el.includes("x"))
        {
            return el.replace("x","cks");
        }
        else
        {
            return el;
        }
    })
    .join(" ")
}

console.log(xPronounce("Inside the box was a xylophone")) // "Inside the bocks was a zylophone"
console.log(xPronounce("The x ray is excellent")) // "The ecks ray is eckscellent"
console.log(xPronounce("OMG x box unboxing video x D")) // "OMG ecks bocks unbocksing video ecks D"