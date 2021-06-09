"use strict"

/*create a script that examines and parses a part code in the following format

supplierCode:productNumber-size;
*/
let supplierCode = "ACME:123-L";
let str = supplierCode.length;
let label;
let partNum;
let partId;

//colonPosition
let colonPosition = supplierCode.indexOf(":");
label = supplierCode.substring(0, colonPosition);
let hyphenPosition = supplierCode.indexOf("-");
partId = supplierCode.substring(str - 1);
partNum = supplierCode.substring(5,8);


console.log(supplierCode + "  "+ " the large "  +"(" + partId + ")" + " " + partNum + " is supplied by " + label);

