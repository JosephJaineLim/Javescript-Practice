/*
If a person traveled up a hill for 18mins at 20mph and then traveled back down the same path 
at 60mph then their average speed traveled was 30mph. distance = 

Write a function that returns the average speed traveled given an uphill time, 
uphill rate and a downhill rate. Uphill time is given in minutes.
Return the rate as an integer (mph). No rounding is necessary.

//-- FOR TESTING --//

aveSpd(18, 20, 60) ➞ 30 

aveSpd(30, 10, 30) ➞ 15

aveSpd(30, 8, 24) ➞ 12

NOTES:
The solution is not dividing the sum of the speeds by 2.
*/

const aveSpd = (a,b,c) => {

    //FORMULA FOR AVERAGE SPEED = (speed1 * time2 + speed2 * time2) / time1 + time2
    
    let dis = a * b;
    let s1 = b;
    let t1 = a;
    let s2 = c;
    let t2 = dis / c;
    

    return ((s1 * t1) + (s2 * t2)) / (t1 + t2)
}

console.log(aveSpd(18, 20, 60)) // 30
console.log(aveSpd(30, 10, 30)) // 15
console.log(aveSpd(30, 8, 24)) // 12
