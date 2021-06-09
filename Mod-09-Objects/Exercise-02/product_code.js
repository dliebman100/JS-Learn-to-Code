"use strict";

//declare a function that takes an object parameter and returns it
function parsePartCode (str) {
  return str;
}
let code = {
  supplierCode: 435,
  productNumber: "B",
  size: "Small"
}
//define variable to pass to function
let resultObject = parsePartCode(code);
console.log("resultObject: ", resultObject)