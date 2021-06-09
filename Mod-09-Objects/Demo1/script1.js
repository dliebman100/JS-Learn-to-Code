"use strict";

let dinnerLastNight = {
  drink: "Orange Juice",
  meal: "Chicken with rice & Broccoli",
  dessert: "Bowl of air"
};
console.log("I drank: " + dinnerLastNight["drink"]);
console.log("I ate " + dinnerLastNight.dessert);

//print out jobTitle and pay
let firstJob = {
  company: "Google",
  jobTitle: "Engineer",
  location: "NY, New York",
  pay:" 1000.00"
};
console.log(firstJob.jobTitle);
console.log(firstJob["pay"]);


//print out your name, mom's name, dad's name
let infoAboutMe = {
  name: "Dan",
  age: "431",
  mom: {
    name: "mom",
    age: "126"
  },
  dad: {
    name: "dad",
    age: "124"
  }
};
console.log(infoAboutMe.name);
console.log(infoAboutMe.mom.name);
console.log(infoAboutMe.dad.name);
