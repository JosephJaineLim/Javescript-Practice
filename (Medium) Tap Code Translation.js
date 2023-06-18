/*
Tap code is a way to communicate messages via a series of taps (or knocks) for each letter in the message. 
Letters are arranged in a 5x5 polybius square, with the letter "K" being moved to the space with "C".

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z

Each letter is translated by tapping out the row and column number that the letter appears in, leaving a short pause in-between. 
If we use "." for each tap, and a single space to denote the pause:

text = "break"

"B" = (1, 2) = ". .."
"R" = (4, 2) = ".... .."
"E" = (1, 5) = ". ....."
"A" = (1, 1) = ". ."
"K" = (1, 3) = ". ..."

Another space is added between the groups of taps for each letter to give the final code:

"break" = ". .. .... .. . ..... . . . ..."

Write a function that returns the tap code if given a word, or returns the translated word (in lower case) if given the tap code. 
When translating from tap-code, default to the letter "c" if the tap-code ". ..." is found.

//-- FOR TESTING --//

tapCode("break") ➞ ". .. .... .. . ..... . . . ..."

tapCode(".... ... ... ..... . ..... ... ... .... ....") ➞ "spent"
*/


const tapCode = (arr) => {
    let a = []; // [[1,1],[1,2],[1,3]...[5,5]]
    let b = []; // [[11], [12],[13]...[55]] 

    for(let i = 1; i <= 5; i++)
    {
        for(let j = 1; j <= 5; j++)
        {
            a.push([i,j]);
            b.push([i,j].join("")); 
        }
    }
    

    if([...arr][0].charCodeAt(0) !== 46){ //if first letter is NOT period 
        return arr //[abcd]
        .split("") //['a','b','c','d']                         
        .map(el => el.toLowerCase().charCodeAt(0) - 97 === 10 ? a[2] : el.toLowerCase().charCodeAt(0) - 97 < 10 ? a[el.toLowerCase().charCodeAt(0) - 97] : a[el.toLowerCase().charCodeAt(0) - 97 - 1]) //charcode - 97, so a = 0 and z = 25. then us that number to change element into corresponding index in Array A
        .flat(1) //[[1,2],[3,4]] => [1,2,3,4]
        .map(el => ".".repeat(el)) // [1,2,3,4] => [. , .. , ... , ....]
        .join(" "); // [. , .. , ... , ....] => . .. ... ...
    }
    else{ // if first letter is ANYTHING EXCEPT 46
        let x = arr  
        .split(" ") 
        .map(el => [...el].length);

        let y = [];
        for(let i = 0; i < arr.split(" ").length; i += 2)
        {
            y.push([x[i] + "" + x[i+1]]);
        }

        return y
        .flat(1)
        .map(el => b.indexOf(el) === 10 ? String.fromCharCode(2) : b.indexOf(el) < 10 ? String.fromCharCode(b.indexOf(el) + 97) : String.fromCharCode(b.indexOf(el) + 97 + 1))
        .join("")
    }
}


console.log(tapCode("Break")); // . .. .... .. . ..... . . . ...
console.log(tapCode(".... ... ... ..... . ..... ... ... .... ....")); //spent

