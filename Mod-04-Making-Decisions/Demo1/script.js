"use strict"

// THIS IS A STORE
// If you buy 1-4 items shipping is $10
// If you buy 5 or more items shipping is $3

let itemCount = 6;
let costPerItem = 4.99;

//calculate subTotal, tax (assume 7%), shipping and total due

let subTotal = costPerItem * itemCount;
let tax = subTotal * 0.07;

let shipping;
if (itemCount <=4) {
  shipping =10;
}
else {
  shipping =3;
}
let totalDue = subTotal + tax + shipping;

console.log("The subtotal is: $" +subTotal.toFixed(2));
console.log("The tax is: $" + tax.toFixed(2));
console.log("The shipping is: $" + shipping.toFixed(2));
console.log("The total due is: $" + totalDue.toFixed(2));