"use strict"

function convertCtoF(temp){
  let fahrenheit = (temp * 9/5) + 32; 
  return fahrenheit;
}
let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + "F is " + fahrenheitTemp + "C");