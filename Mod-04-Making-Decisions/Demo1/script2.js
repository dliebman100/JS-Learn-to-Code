"use strict"

// TUITION AND FEES CALCULATOR

// Undergraduate tuition is $4/hour and graduate tuition was $6/hour
// fees are $2/hour with a max of $10
// what do you owe the school?

let classification = "graduate";
let hrsEnrolled = 2;

let tuitionPerHour;
if (classification == "undergraduate") {
  tuitionPerHour = 4;
}
else {
  tuitionPerHour = 6;
}

let totalTuition = hrsEnrolled * tuitionPerHour;

//OPTION 1
let fees = 2 * hrsEnrolled
if (fees > 10) {
  fees = 10;
}
// OPTION 2
// let fees;
// if (hrsEnrolled < 5) {
//   fees = hrsEnrolled * 2;
// }
// else {
//   fees = 10;
// }

let totalDue = totalTuition + fees;
console.log("Total due by the 1st day of class is $" + totalDue.toFixed(2));