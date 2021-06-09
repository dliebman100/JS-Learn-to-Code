"use strict";

function getFoods(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i].price;
  }
  return sum;
}
function displayFoods (foods) {
  for (let i = 0; i < foods.length; i++) {
    // console.log(foods[i]);
    console.log(foods[i].item);
    // console.log(foods[i].price.toFixed(2));
  }
}
//declare an array called favFoods and put a different food in it
let foodMenu = [
  {item: "Popcorn", price: 9.95}, 
  {item: "Pretzels", price: 2.00},
  {item: "Roast chicken", price: 14.95},
  {item: "Pickles", price: 1.00},
  {item: "Biscuits and gravy", price: 6.75}, 
  {item: "Pancakes", price: 5.95} 
];
let drinkMenu = [
  {item: "Old Fasioned", price: 10.95},
  {item: "Martini", price: 7.95},
  {item: "Bahama Mama", price: 9.95},
  {item: "Iced tead", price: 1.75}
];
displayFoods(drinkMenu);
console.log();
displayFoods(foodMenu);


//iterate thru loop add up price and print out subtotal
// let subtotal = getFoods(foods);
// console.log("Subtotal is: " + subtotal + "\n");
// //display tax on total (assume 0.08)
// let total = subtotal * 1.08;
// console.log("Total is: " + total.toFixed(2) + "\n");
// //display tip on total (0.18)
// let tip = total * 0.18;
// console.log("Tip is: " + tip.toFixed(2) + "\n");
// //display totalDue
// let totalDue = total + tip;
// console.log("Total due is: " + totalDue.toFixed(2) + "\n");
