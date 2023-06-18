/*
You go to a jewelry shop and try to find the most expensive piece of jewelry. 
You write down the name of each piece of jewelry and its price.

Create a function that gets the name of the piece of jewelry with the highest price and 
returns "The most expensive one is the {name of jewelry piece}".

//-- FOR TESTING --//
mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}) ➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
}) ➞ "The most expensive one is the Diamond Ring"

Notes:
    There will always be at least one item in the object.

    There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).
*/

const mostExpensive = (a) => {
    const b = Object.entries(a);

    return "The most expensive one is the " + b
    .sort((c, d) =>{
        c = Object.values(b)[0][1];
        d = Object.values(b)[1][1];

        if(c < d)
        {
            return 1
        }
        else
        {
            return -1
        }
    })[0][0];
}

console.log(mostExpensive (
    {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
    })) //  "The most expensive one is the Pearl Necklace"

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
    })) // "The most expensive one is the Diamond Ring")
