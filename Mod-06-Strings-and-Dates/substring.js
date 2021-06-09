"use strict"

//PARTS CODES look like "manufacturer:partNumber
//ex: NIKE:L10

let partCode = "NIKE:L10";
//let partCode = document.getElementbyId("partCode").value;

let manufacturer;
let partNumber;
let colonPosition = partCode.indexOf(":");

//colonPosition char is not included when you call substring
manufacturer = partCode.substring(0, colonPosition);

//if you only specify the starting position, it automatically goes to the end of string
partNumber = partCode.substring(colonPosition + 1);

console.log("Manufacturer: " + manufacturer);
console.log("Part Number: " + partNumber);