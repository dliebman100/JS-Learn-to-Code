"use strict"
/* 
Write a program to pull out 1st 3 digits, next 3 digits, last 4 digits then format like (xxx) xxx-xxxx
phone number formats:
1) 817-291-8146
2) 817/291-8146
3) 817.291.8146
4) (817)291-8146
*/

// substring(start, end)
// substring is good when you know the starting and ending positions of a substring (ex: you have the position of the first space and the last space in a three part name)
// substr is good for things like pulling apart phone numbers and social security numbers where you know the starting position and how many  characters there are
let phoneNum = "8172918146";
// 8 1 7 put char here. Start at char 0 and go up to but not including pos 3
// 0 1 2 3 
let firstThreeDigs = phoneNum.substring(0,3);
//Start at char 3 and go up to but not including pos 6
let midThreeDigs = phoneNum.substring(3,6);
//Start at char 6 and take the rest of the string
let lastFourDigs = phoneNum.substring(6);

// let firstThreeDigs = phoneNum.substr(0,3);
// let midThreeDigs = phoneNum.substr(3,3);
// let lastFourDigs = phoneNum.substr(6);

let formattedPhoneNum = 
"(" + firstThreeDigs + ") " + midThreeDigs + "-" + lastFourDigs;
console.log("Formatted phone number: " + formattedPhoneNum);

let templateLiteral = 
`(${firstThreeDigs}) ${midThreeDigs}-${lastFourDigs}`;
console.log("New formatted phone number: " + templateLiteral);