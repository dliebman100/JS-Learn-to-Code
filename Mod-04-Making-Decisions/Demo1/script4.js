"use strict";

let shipMethod = "USPS";
let shipWeight = 300; // in pounds"
let shipCost;
//  USPS $2/lb up to (and inlcuding) 10 lbs, then $1.75/lb afterwards
//  UPS $1.50/lb up to 100/lbs, $2.50 afterwards
//  FedEx $3/lb  0-10 $3/lb, 11-20 $2.75/lb, over 20 is $2.50/lb
if (shipMethod == "USPS")  {
   if (shipWeight <= 10 ) {
       shipCost = 2 * shipWeight;
   }
   else {
       shipCost = 1.75 * shipWeight;
   }
}
else if (shipMethod == "UPS") {
    if (shipWeight <= 100 ) {
        shipCost = 1.5 * shipWeight;
    }
    else {
        shipCost = 2.5 * shipWeight;
    }
}
else {
    if (shipWeight <= 10) {
        shipCost = 3 * shipWeight;
    }
    else if (shipWeight <= 20) {
        shipCost = 2.75 * shipWeight;
    }
    else {
        shipCost = 2.5 * shipWeight;
    }
}
console.log("Your shipping cost for " + shipWeight + " pounds via " + shipMethod + " is $" + shipCost.toFixed(2));