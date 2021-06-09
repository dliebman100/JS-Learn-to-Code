"use strict"

/*write code to find the space using substring() and then extract and display
the first and last name

Name: Brenda Kaye
First name: Brenda
last name: Kaye
*/

let name = "Brenda Kaye";
let fname = name.substring(0,6);
let lname = name.substring(6,11);

console.log("Name: " + name);
console.log("First Name: " + fname);
console.log("Last Name: " + lname);