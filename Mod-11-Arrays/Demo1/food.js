"use strict";

//FUNCTION DECLARATION
function getFoods(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    //iterate thru objects price property
    sum += num[i].price;
  }
  //return statement
  return sum;
}
//ARRAY DECLARATION
let lunchMenu = [
  {item: "Steak fajitas", price: 9.95}, 
  {item: "Chips and guac", price: 2.00},
  {item: "Roast chicken", price: 14.95},
  {item: "Pickles", price: 1.00},
  {item: "Sweet tea", price: 6.75}
];
let myLunch = [
  {item: "Egg fried rice", price: 9.95}, 
  {item: "Chips and guac", price: 2.00},
  {item: "Matcha tea", price: 4.95},
];

// iterate thru loop add up price and print out subtotal
let subtotal = getFoods(lunchMenu);
console.log("Subtotal is: " + subtotal + "\n");
//display tax on total (assume 0.08)
let total = subtotal * 1.08;
console.log("Total is: " + total.toFixed(2) + "\n");
//display tip on total (0.18)
let tip = total * 0.18;
console.log("Tip is: " + tip.toFixed(2) + "\n");
//display totalDue
let totalDue = total + tip;
console.log("Total due is: " + totalDue.toFixed(2) + "\n");
