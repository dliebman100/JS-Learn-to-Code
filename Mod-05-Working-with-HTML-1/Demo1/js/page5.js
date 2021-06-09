"use strict"

window.onload = function() {
  const findAgeBtn = document.getElementById("findAgeBtn");
  findAgeBtn.onclick = findAgeBtnClicked;

}
function findAgeBtnClicked() {
  // Get the year the user was born from the HTML <input> whose ID is yearBorn
  // When you use document. it looks into the HTML doc
  // type the getElementId with the ID from <input> on the HTML 
  const yearBornField = document.getElementById("yearBorn");
  let yearBorn = Number(yearBornField.value);
  
  // Get today's date so we can so we can calculate the user's age on their birthday
  let today = new Date();
  let currentYear = today.getFullYear();
  
  // Calculate the user's age using their yearBorn and today's year
  let age = currentYear - yearBorn;
  
  // find the <input> that will hold the results and place the age there
  const ageField = document.getElementById("age");
  ageField.value = age;
}

