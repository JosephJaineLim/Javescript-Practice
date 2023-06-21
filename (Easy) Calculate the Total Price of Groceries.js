/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

//-- FOR TESTING --//

getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
]) ➞ 1.5

getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]) ➞ 4

getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
]) ➞ 4.5

getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]) ➞ 10.4

getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]) ➞ 0.3

*/

const getTotalPrice = (arr) => arr.reduce((accumulator, current) => accumulator + current.price * current.quantity,0).toFixed(2)


console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }]));
// 1.5
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },{ product: "Cereals", quantity: 1, price: 2.50 }]));
//4
console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }]));
//4.5
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 },{ product: "Eggs", quantity: 12, price: 0.10 },{ product: "Bread", quantity: 2, price: 1.60 },{ product: "Cheese", quantity: 1, price: 4.50 }]));
//10.4
console.log(getTotalPrice([{ product: "Chocolate", quantity: 1, price: 0.10 },{ product: "Lollipop", quantity: 1, price: 0.20 }]));
//0.3