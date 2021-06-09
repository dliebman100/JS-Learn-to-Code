"use strict"

let shipMethod = "UPS";
let shipWeight = 3;
let shipCost;
// USPS $2/lb
// UPS $1.50/lb
// FedEx $3/lb
// if (shipMethod == "USPS") {
//   shipCost = 2 * shipWeight;
// }
// else if (shipMethod == "UPS") {
//   shipCost = 1.50 * shipWeight;
// }
// else if (shipMethod == "FedEx") {
//   shipCost = 3 * shipWeight;
// }
// else {
//   console.log ("ERROR - invalid shipping code");
// }
// if you are SURE they can only have USPS, UPS, or FedEx
if (shipMethod == "USPS") {
  shipCost = 2 * shipWeight;
}
else if(shipMethod == "UPS") {
  shipCost = 1.50 * shipWeight;
}
else  {
  shipCost = 3 * shipWeight;
}
console.log("Your shipping cost for " + shipWeight + " pounds via " + shipMethod
+ " is $" + shipCost.toFixed(2))