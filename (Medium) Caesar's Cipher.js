/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) 
and an integer k (the rotation factor). It should return an encrypted string.

caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

//-- FOR TESTING --// 

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"

*/

const caesarCipher = (arr, arr2) => {

    let t = "";
    
    for(let i = 0; i < arr.split("").length; i++)
    {
        let num = Number(arr[i].charCodeAt() + arr2);

        while(arr[i].charCodeAt() <= 90 && num > 90 || arr[i].charCodeAt() >= 90 && num > 122)
        {
            num -= 26
        }

        if(arr[i].charCodeAt() < 65 || arr[i].charCodeAt() > 90 && arr[i].charCodeAt() < 96 || arr[i].charCodeAt() > 122)
        {
            num = arr[i].charCodeAt();
        }

        t += String.fromCharCode(num);
    }

    return t;
}

console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)) //"Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
console.log(caesarCipher("A friend in need is a friend indeed", 20)) //"U zlcyhx ch hyyx cm u zlcyhx chxyyx"