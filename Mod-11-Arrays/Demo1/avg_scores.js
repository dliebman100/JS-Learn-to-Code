"use strict";

let otherScores = [64, 76, 93, 68, 98, 100, 75];
let myScores = [100, 65, 85, 82, 78, 81, 72];
// let total = 0
// for (let i = 0; i < scores.length; i++) {
//   total += scores[i];
// }
// let average =  total / scores.length;
// console.log("The average is: " + average);

function getAverage (arr) {
  let total = 0;
  //for in loop or for loop to iterate over array
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  //need length variable
  let numCount = arr.length;
  //return average
  return total /numCount;
}
//construct from array length
let myAvg = getAverage(myScores);
let theirAvg = getAverage(myScores);
console.log(myAvg.toFixed(2));