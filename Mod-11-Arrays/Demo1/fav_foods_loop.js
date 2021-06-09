"use strict";

//declare an array called favFoods and put a different food in it
let favFoods = [
  "Popcorn", 
  "Pretzels",
  "Roast chicken",
  "Pickles",
  "Biscuits and gravy",
  "Pancakes"
];
//use console.log to display the 3rd item
// console.log(favFoods[2]);
//for loop that lets i go from 0 to 3 
//inside loop print all favorite foods
for (let i = 0; i < favFoods.length; i++) {
  console.log(favFoods[i]);
}
console.log("But "+ favFoods[5] + " == my favorite");