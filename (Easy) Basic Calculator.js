/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

//-- FOR TESTING --// 
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2

NOTES:

If the input tries to divide by 0, return: "Can't divide by 0!"
*/

const calculator = (num1, operator, num2) => {
    if(num2 === 0) return "Can't divide by 0!";
    
    let ans;
    switch(operator){
        case '+': ans = num1 + num2;
        break;
        case '-': ans = num1 - num2;
        break;
        case '*': ans = num1 * num2;
        break;
        case '/': ans = num1 / num2;
        break;
    }

    return ans;
}

console.log(calculator(2, "+", 2)) // 4
console.log(calculator(2, "*", 2)) // 4
console.log(calculator(4, "/", 2)) // 2
