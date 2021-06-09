"use strict"

function convertFtoC(temp){
  let celsius = (temp - 32) * 5/9; 
  return celsius;
}
let currentTemp = 212;
let celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + "F is " + celsiusTemp + "C");