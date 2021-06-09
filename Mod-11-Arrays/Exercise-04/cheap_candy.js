"use strict";

let products = [{
    product: "Gummy Worms",
    price: 5.79
  },
  {
    product: "Plain M&Ms",
    price: 2.89
  },
  {
    product: "Peanut M&Ms",
    price: 2.89
  },
  {
    product: "Swedish Fish ",
    price: 3.79
  },
  {
    product: "Nerds ",
    price: 3.99
  },
  {
    product: "Chocolate ",
    price: 2.99
  },
  {
    product: "Goobers ",
    price: 3.99
  },
  {
    product: "Lemonheads ",
    price: 5.89
  },
  {
    product: "Grapeheads ",
    price: 4.79
  },
  {
    product: "Good & Plenty ",
    price: 5.25
  }
];
//fill the array with 10 candies of various price ranges
//use filter method to return every item that is < $4.00 and display them
let getCandy = products.filter(p => p.price <= 4);
for (let i = 0; i < getCandy.length; i++) {
  console.log(getCandy[i].product);
}
//Loop thru products with matching candyContainer var
// let candyContainer = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price < 4) {
//     candyContainer.push(products[i].product)
//   }
// }
// for (let i = 0; i < candyContainer.length; i++) {
//   console.log(candyContainer[i]);
// }