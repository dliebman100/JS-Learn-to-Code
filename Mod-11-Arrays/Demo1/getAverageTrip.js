"use strict";

let myMileageLog = [313, 328, 349, 287, 301];
let yourMileageLog = [5, 20, 35, 1, 15];
let theirMileageLog = [500, 20, 35, 1, 1000];

function displayMiles(mileageLog) {
  for (let i = 0; i < mileageLog.length; i++) {
    console.log(mileageLog[i]);
  }
}
function getAverageTripDistance(mileageLog){
  let total = 0;
  for (let i = 0; i < mileageLog.length; i++){
    total += mileageLog[i];
  }
  let average = total / mileageLog.length;
  return average;
}
// console.log("My mileage log: ");
// displayMiles(myMileageLog);
// let myAvgTrip = getAverageTripDistance(myMileageLog);
// console.log("My average trip was " + myAvgTrip + " miles. Yay!");

console.log("Your mileage log: ");
displayMiles(yourMileageLog);
let yourAvgTrip = getAverageTripDistance(yourMileageLog);
console.log("Your average trip was " + yourAvgTrip + " miles. Yay!");

// console.log("Their mileage log: ");
// displayMiles(theirMileageLog);
// let theirAvgTrip = getAverageTripDistance(theirMileageLog);
// console.log("Their average trip was " + theirAvgTrip + " miles. Yay!");